import * as React from "react";
import {
  Table,
  Input,
  Checkbox,
  Select,
  Balloon,
  Button,
  Icon,
  Message,
} from "@alife/next";
interface IConfigProps {
  vscode: any;
  initialData: any;
  defaultLanguage: string;
}

interface IConfigState {
  config: any;
  tableDataSource: any; //table source
  cellPropsData: any; //行列合并的属性
  rowSelection: any;
}
class App extends React.Component<IConfigProps, IConfigState> {
  constructor(props: any) {
    super(props);
    let initialData = this.props.initialData;
    console.log("app", initialData);
    let oldState = this.props.vscode.getState();
    if (oldState) {
      console.log("oldState", oldState);
      this.state = oldState;
    } else {
      //需要将initialData的格式转换为table的数据格式
      console.log("default langauge", this.props);
      let transfterData = this.tableDataTransfer(initialData);
      console.log("transfterData", transfterData);
      this.state = {
        config: initialData,
        tableDataSource: transfterData.dataSource,
        cellPropsData: transfterData.cellPropsData,
        rowSelection: {
          onChange: this.onChange.bind(this),
          getProps: (record, index) => {
            return {
              // 如果当前文案查询 key 失败，则不能选择
              disabled: (record.mcmsItem && !record.mcmsItem.resource_key) || !record.mcmsItem, 
              children: index,
            };
          },
          columnProps: () => {
            return {
              width: 80,
            };
          },
          selectedRowKeys: transfterData.selectedRowKeys,
          onSelectAll: (selectd, records) => {},
        },
      };
    }
  }
  private defineState(newSate: IConfigState) {
    this.setState(newSate);
    this.props.vscode.setState(newSate);
  }
  columns = [
    {
      title: "文件",
      dataIndex: "file",
    },
    {
      title: "文案",
      dataIndex: "reason",
      cell: (value) => {
        return (value && value.replace(/^'|^"|'$|"$/gi, "")) || "";
      },
    },
    {
      title: "匹配到的词条key",
      dataIndex: "mcmsItem",
      cell: (value, index, record) => {
        if (value) {
          return value.resource_key ? (
            <p>{value.resource_key}</p>
          ) : (
            <p>{`文案key查询失败:${value.errMsg}`}</p>
          );
        } else {
          return "--";
        }
      },
    },
    // {
    //   title: "根据规则生成的词条key",
    //   dataIndex: "mdsKeyAutoGenerate",
    //   cell: (value, index, record) => {
    //     return record.keyAutoError ? (
    //       <div>
    //         <Input
    //           onChange={(val) => {
    //             this.onKeyChange(val, "auto", index, record);
    //           }}
    //           defaultValue={value || ""}
    //         ></Input>
    //         <p className="webview-key-error">key不能为空</p>
    //       </div>
    //     ) : (
    //       <Input
    //         onChange={(val) => {
    //           this.onKeyChange(val, "auto", index, record);
    //         }}
    //         defaultValue={value || ""}
    //       ></Input>
    //     );
    //   },
    // },
    // {
    //   title: "美杜莎中匹配的词条key",
    //   dataIndex: "mcmsItem",
    //   cell: (value, index, record) => {
    //     if (value) {
    //       return record.keyMcmsError ? (
    //         <div>
    //           <p>{value.resource_key}</p>
    //           <p className="webview-key-error">key不能为空</p>
    //         </div>
    //       ) : (
    //         <p>{value.resource_key}</p>
    //       );
    //     } else {
    //       return "--";
    //     }
    //   },
    // },
    // {
    //   title: (
    //     <Balloon
    //       triggerType="hover"
    //       trigger={
    //         <div>
    //           <span className="wether-use-key">复用美杜莎中的key</span>
    //           <Icon size="xs" type="help" />
    //         </div>
    //       }
    //     >
    //       优先使用美杜莎匹配到的key来替换文案
    //     </Balloon>
    //   ),
    //   dataIndex: "medusa",
    //   cell: (value, index, record) => {
    //     if (record.mcmsItem) {
    //       return (
    //         <Checkbox
    //           onChange={(checked) => this.onMcmsChecked(checked, index, record)}
    //           defaultChecked={record.mcmsSelected}
    //         ></Checkbox>
    //       );
    //     } else {
    //       return "--";
    //     }
    //   },
    // },
    {
      title: "文案语种",
      dataIndex: "language",
      cell: (value, index, record) => {
        return (
          <Select
            defaultValue={value}
            value={value}
            onChange={(val) => this.onLanguageChange(val, index, record)}
          >
            <Select.Option value="zh_CN">中文</Select.Option>
            <Select.Option value="en_US">英文</Select.Option>
          </Select>
        );
      },
    },
  ];
  /**
   * 文案语种变化
   * @param val
   * @param index
   * @param record
   */
  onLanguageChange = (val, index, record) => {
    let tableDataSource = JSON.parse(
      JSON.stringify(this.state.tableDataSource)
    );
    record.language = val;
    tableDataSource[index] = record;
    this.defineState(tableDataSource);
  };
  /**
   *
   * @param val
   * @param type auto或者mcms ,自动生成的key变化或者mcms推荐的Key变化
   * @param record
   */
  onKeyChange = (val, type, index, record) => {
    let tableDataSource = JSON.parse(
      JSON.stringify(this.state.tableDataSource)
    );
    console.log("keychange", val, type, index, record);
    if (type == "auto") {
      record.mdsKeyAutoGenerate = val;
      if (!record.mcmsSelected && !val) {
        record.keyAutoError = true;
      } else {
        record.keyAutoError = false;
      }
    } else if ((type = "mcms")) {
      record.mcmsItem.resource_key = val;
      if (record.mcmsSelected && !val) {
        record.keyMcmsError = true;
      } else {
        record.keyMcmsError = false;
      }
    }
    tableDataSource[index] = record;
    this.defineState(tableDataSource);
  };
  onMcmsChecked = (checked, index, record) => {
    let tableDataSource = JSON.parse(
      JSON.stringify(this.state.tableDataSource)
    );
    record.mcmsSelected = checked;
    if (!checked) {
      if (record.keyMcmsError) record.keyMcmsError = false;
      if (!record.mdsKeyAutoGenerate) record.keyAutoError = true;
    }
    tableDataSource[index] = record;
    console.log("checkwd", checked, index, record);
    this.defineState(tableDataSource);
  };
  //修复确认
  onConfirm = () => {
    // 首先需要进行校验
    let selectedRowKeys = this.state.rowSelection.selectedRowKeys;
    if (!selectedRowKeys.length) {
      Message.warning("没有可修复的文案");
      return;
    }
    let tableDataSource = JSON.parse(
      JSON.stringify(this.state.tableDataSource)
    );
    // 选中的才替换
    let result = [];
    tableDataSource.forEach((item) => {
      if (selectedRowKeys.indexOf(item.key) > -1) {
        result.push(item);
      }
    });
    let command = {
      action: "save",
      data: result,
    };
    this.props.vscode.postMessage(command);
  };
  //修复取消
  onCancel = () => {
    let command = {
      action: "cancel",
    };
    this.props.vscode.postMessage(command);
  };
  // 把 data 转为 tableData，同时增加一些属性
  tableDataTransfer = (data: any) => {
    let dataSource = [];
    let cellPropsData = {};
    let rowIndex = 0;
    let span = 0;
    let selectedRowKeys = [];
    Object.keys(data).forEach((fileName) => {
      let fileData = data[fileName];
      let fileDataKeys = Object.keys(fileData);
      rowIndex = rowIndex + span;
      span = fileDataKeys.length;
      fileDataKeys.forEach((id) => {
        let dataitem = fileData[id];
        dataitem.fileName = fileName;
        dataSource.push(dataitem);
        dataitem.keyAutoError = false;
        dataitem.keyMcmsError = false;

        dataitem.language = this.props.defaultLanguage;
        if (dataitem.mcmsItem && dataitem.mcmsItem.resource_key) {
          selectedRowKeys.push(dataitem.key);
          dataitem.mcmsSelected = true;
        } else {
          dataitem.mcmsSelected = false;
        }
      });
      cellPropsData[rowIndex] = span;
    });
    return { dataSource, cellPropsData, selectedRowKeys };
  };
  cellProps = (rowIndex, colIndex) => {
    let cellPropsData = this.state.cellPropsData;
    if (colIndex == 1) {
      return { rowSpan: cellPropsData[rowIndex] || 1 };
    }
  };
  onChange = (selectedRowKeys, records) => {
    const { rowSelection } = this.state;
    rowSelection.selectedRowKeys = selectedRowKeys;
    console.log('rowSelection ==', rowSelection)
    this.defineState(rowSelection);
  };

  render() {
    // debugger;
    let { config, tableDataSource, cellPropsData } = this.state;
    console.log("app config", config);
    return (
      <div className="App">
        <div className="App-title">修复确认</div>
        <Table
          className="medusa-review-table"
          dataSource={tableDataSource}
          cellProps={this.cellProps}
          isZebra={true}
          primaryKey="key"
          rowSelection={this.state.rowSelection}
        >
          {this.columns.map((item) => {
            return (
              <Table.Column
                title={item.title}
                dataIndex={item.dataIndex}
                cell={item.cell}
              ></Table.Column>
            );
          })}
        </Table>
        <div className="app-btn-wrap">
          <Button
            onClick={this.onConfirm}
            type="primary"
            className="app-btn-wrap-confirm"
          >
            确认
          </Button>
          <Button onClick={this.onCancel}>取消</Button>
        </div>
      </div>
    );
  }
}

export default App;
