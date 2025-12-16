## 1.63.18172 (December 03, 2025)

### Minor Features

- Inline PestPHP test case runner support. [@MrPunyapal](https://x.com/MrPunyapal/status/1994339061956329731)
- Code completion for suggested argument string values.
- Supports `@psalm-assert-if-true`, `@psalm-assert-if-false`.
- Supports `@phpstan-assert` or `psalm-assert` with type hint prefixed with `=`, used by PHPUnit's `assertInstanceOf()`.
- Respects `@phpstan-ignore-line`.

### Fixes

- False error when using member field or anonymous function in constant expression. [#955](https://github.com/DEVSENSE/phptools-docs/issues/955), [#958](https://github.com/DEVSENSE/phptools-docs/issues/958)
- Invalid unnecessary parentheses hint in `and`, `or` conditions. [#2467](https://community.devsense.com/d/2467)
- Language server crash fix when there is invalid `@dataProvider` annotation.

## 1.63.18152 (Nov 27, 2025)

### Minor Features

- Testing runs tests which groups were excluded in `phpunit.xml` configuration but selected/filtered in Testing view. So large/slow tests can be excluded using `<groups><exclude><group>...` XML configuration, so they don't run by default when running all tests. If those excluded tests aree selected or filtered using the filter box, the exclusion is overriden. [#2426](https://community.devsense.com/d/2426-test-explorer-does-not-filter-by-at-group/12)
- Problems in `/vendor/**` folder (including the special subfolders like `composer`) are not listed at all now, unless the file under `vendor` folder is opened in the editor.
- Type narrowing for `is_numeric`. [#2436](https://community.devsense.com/d/2436)
- Added `php-amqp` stubs.
- Settings `files.exclude`, `php.files.exclude`, `search.exclude`, `php.problems.exclude` support glob patterns with groups, ranges, negations, and special characters enclosed in `[`, `]` brackets. [#945](https://github.com/DEVSENSE/phptools-docs/issues/945)
- Added command `PHP Tools: Quick Settings ...` to access frequently requested PHP editor settings.
- Updated multi-language PHP manual.
- Dimm unused private class functions. [#800](https://community.devsense.com/d/800)
- Quick refactoring to replace `array_merge` with array spread.
- Quick refactorig to cleanup unnecessary `()` around `new` in PHP >= 8.4.
- Quick refactorig to create new callable syntax from anonymous function.
- Completing variable names inside `compact()` function.
- Diagnostics for constant expressions (`PHP2446`) in attributes and various initializers. Seen in [#2458](https://community.devsense.com/d/2458), [#949](https://github.com/DEVSENSE/phptools-docs/issues/949)
- Improves override checks for `enum` definitions with complex hierarchy. [#2460](https://community.devsense.com/d/2460)
- Unknown type checks for union types and intersection types in typed properties. [#2461](https://community.devsense.com/d/2461)

### Fixes

- Fixed auto-closing `)` overtype when completing function with parameters or parentheses. [#947](https://github.com/DEVSENSE/phptools-docs/issues/947)
- Fixed quick fixes inside attributes.
- Fixes code action converting to an arrow function containing an object operator `->`.
- Doesn't suggest PSR-4 class name fix, if the file name is not a valid class name identifier.
- Doesn't suggest arrow `fn` in constant expressions. [#949](https://github.com/DEVSENSE/phptools-docs/issues/949)
- Unused function declaration not reported for `__construct` and other magic methods.[#950](https://github.com/DEVSENSE/phptools-docs/issues/950)
- Fixed `@phpstan-assert` affecting more expressions in the code flow than it should. [#2459](https://community.devsense.com/d/2459)

### Breaking Changes

- The setting `"php.completion.intelliPHP.preSelect"` is `false` by default. Although [this feature is awesome](https://docs.devsense.com/vscode/editor/intelliphp/#pre-selecting-the-item-in-the-completion-list), it may slow down code completion by 50 - 250 ms.

## 1.62.18097 (Nov 12, 2025)

### Auto-Import with Grouping

Newly, auto-import respects existing `use` groupings, so the imported qualified name is added to the group.

New setting allows to create new `use` groups, if suitable.

```json
"php.completion.autoimport": "auto-import-grouped"
```

![auto-import grouped](https://raw.githubusercontent.com/DEVSENSE/phptools-docs/refs/heads/master/docs/vscode/editor/imgs/vsc-autoimport-group.gif)

### Diagnostic for Unoptimized Special Compiler Functions

[#2438](https://community.devsense.com/d/2438): In case a compiler optimized function is not imported in the current scope, the compiler cannot translate it to a more efficient OP code. New diagnostic `PHP6616` has been added to mark such function calls.

![native function invocation](https://raw.githubusercontent.com/DEVSENSE/phptools-docs/refs/heads/master/docs/vscode/imgs/native-function-invocation-example.png)

By default, such problem is marked less prominently, and not listed in VSCode Problems window. The following configuration allows it to be underlined more prominently, and even auto-fixed on _File Save_, or by triggering VSCode "Auto Fix..." command.

`.editorconfig`
```ini
[*.php]
php_diagnostic_php6616=autofix
```

Read more at our [blog post at blog.devsense.com](https://blog.devsense.com/2025/optimize-native-function-invocation/).

### Minor Features

- Annotations `@phpstan-assert` and `@psalm-assert` are respected across the `vendor` folder.
- Improved **CI3** support; adds dynamic properties on your `CI_Controller` from loaded libraries.
- Completion of array keys when defining an array inside a function call with structured array parameter hint [#942](https://github.com/DEVSENSE/phptools-docs/issues/942).
- Improved _unnecessary parentheses_ hint, respects `and` and `=` operators precedence, adds more hints for `||`, `&&`, assignments, `if`, and other binary operators [#2444](https://community.devsense.com/d/2444).

### Fixes

- Fixed broken type inferring if a method in a composer package returns `self` but is only type annotated in the base interface. [#941](https://github.com/DEVSENSE/phptools-docs/issues/941)
- Fix: The Align Consecutive Assignments feature now correctly works inside callables (closures and anonymous functions). [#2442](https://community.devsense.com/d/2442-align-consecutive-assignments)
- Switching between blade component view and blade component class ([docs](https://docs.devsense.com/vscode/frameworks/laravel/#switch-between-blade-view-and-class)) fixed. [#2443](https://community.devsense.com/d/2443)

## 1.62.18042 (October 30, 2025)

### New Features

- Support for **PHPUnit groups**, so tests can be filtered in Testing panel by the group name.
- Improved type inferring in false branch when type checking.
- Improved type inferring making use of `class-string` type.
- Mouse tooltip for named parameter inlay hint.
- Consecutive assignment alignment now supports formatting assignments of different types (e.g., =, +=, ??=, etc.) [#2432](https://community.devsense.com/d/2432)

## CodeIgniter 3

The lightweight and popular **CodeIgniter 3** framework has its own quirks and conventions that many PHP editors may not handle correctly. PHP Tools for Visual Studio Code now includes built-in support for CodeIgniter 3. This support will be even more enhanced in upcoming updates.

![CI3 completion](https://docs.devsense.com/vscode/frameworks/img/ci3-view-completion.png)

With this version you can see:
- completion for model names.
- completion for view names.
- completion of loaded class in your controller.

Special thanks for the contribution in [#677](https://github.com/DEVSENSE/phptools-docs/issues/677).  
See more at [docs.devsense.com](https://docs.devsense.com/vscode/frameworks/codeigniter3/).

### Fixes

- Backed `enum` implementing an interface resolves to `BackedEnum` correctly [#930](https://github.com/DEVSENSE/phptools-docs/issues/930).
- Results of test cases that are not declared within a namespace were not recoded [#936](https://github.com/DEVSENSE/phptools-docs/issues/936).
- Fixed false type inferrings for `App\Models\` classes not based on Laravel/Symfony frameworks.

## 1.62.17969 (October 9, 2025)

### Tests Code Coverage

We're introducing support for tests [_Code Coverage_](https://docs.devsense.com/vscode/test-explorer/#code-coverage). Try it now, navigate to _Testing_ panel, and click _Run Tests with Coverage_ button. Code coverage will appear in _Testing_ panel, _Explorer_ panel, and also right in your code.

![code coverage button](https://docs.devsense.com/vscode/imgs/code-coverage-start-button.png)

![code coverage](https://raw.githubusercontent.com/DEVSENSE/phptools-docs/refs/heads/master/docs/vscode/imgs/code-coverage-results-explorer.png)

![code coverage](https://raw.githubusercontent.com/DEVSENSE/phptools-docs/refs/heads/master/docs/vscode/imgs/code-coverage-visual.png)

> The feature relies on PHPUnit/Para/Pest functionality - it runs the tests using appropriate command line arguments and displays the coverage information conveniently right in VSCode. Please make sure, your `phpunit.xml` configuration contains `<source>` element. For troubleshooting, watch the _OUTPUT_ window / _PHP (Test Explorer)_ .

### More Features

- `@see` in mouse tooltip contains clickable links to the referenced symbols, if possible.
- `@see` in source code has semantically colorized symbols.
- **PHP 8.5** language level, pipe operator (`|>`) and basic checks.
- Validation of `enum` declarations ([#926](https://github.com/DEVSENSE/phptools-docs/issues/926)).
- Check for implicitly nullable parameters (deprecated in PHP &gt;= 8.4).
- When running all tests with several test suites, only one process is created now.

## 1.61.17926 (September 23, 2025) [...]
## 1.60.17873 (Sep 2, 2025) [...]
## 1.60.17845 (Aug 23, 2025) [...]
## 1.60.17803 (Aug 14, 2025) [...]
## 1.59.17706 (July 29, 2025) [...]
## 1.59.17685 (July 23, 2025) [...]
## 1.59.17674 (July 18, 2025) [...]
## 1.59.17515 (June 23, 2025) [...]
## 1.59.17478 (June 15, 2025) [...]
## 1.58.17223 (May 2, 2025) [...]
## 1.57.17158 (April 11, 2025) [...]
## 1.57.17031 (March 25, 2025) [...]
## 1.57.16971 (March 12, 2025) [...]
## 1.56.16884 (February 19, 2025) [...]
## 1.56.16853 (February 12, 2025) [...]
## 1.55.16740 (January 22, 2025) [...]
## 1.55.16685 (January 15, 2025) [...]
## 1.54.16574 (December 23, 2024) [...]
## 1.54.16480 (December 10, 2024) [...]
## 1.53.16379 (November 19, 2024) [...]
## 1.53.16338 (November 12, 2024) [...]
## 1.52.16273 (October 30, 2024) [...]
## 1.52.16226 (October 21, 2024) [...]
## 1.51.16099 (September 26, 2024) [...]
## 1.51.15986 (September 10, 2024) [...]
## 1.50.15906 (August 20, 2024) [...]
## 1.50.15872 (August 13, 2024) [...]
## 1.49.15728 (July 8, 2024) [...]
## 1.48.15635 (June 16, 2024) [...]
## 1.47.15512 (May 28, 2024) [...]
## 1.46.15409 (May 9, 2024) [...]
## 1.45.15272 (April 11, 2024) [...]
## 1.45.15260 (April 8, 2024) [...]
## 1.45.15192 (March 26, 2024) [...]
## 1.45.15145 (March 14, 2024) [...]
## 1.45.15061 (February 27, 2024) [...]
## 1.44.14997 (February 14, 2024) [...]
## 1.44.14950 (February 7, 2024) [...]
## 1.44.14925 (February 5, 2024) [...]
## 1.43.14858 (January 24, 2024) [...]
## 1.43.14756 (January 15, 2024) [...]
## 1.42.14626 (December 30, 2023) [...]
## 1.42.14434 (December 12, 2023) [...]
## 1.41.14263 (November 14, 2023) [...]
## 1.40.14103 (October 18, 2023) [...]
## 1.39.13943 (September 20, 2023) [...]
## 1.38.13918 (September 15, 2023) [...]
## 1.38.13779 (September 1, 2023) [...]
## 1.38.13759 (August 30, 2023) [...]
## 1.37.13534 (August 4, 2023) [...]
## 1.36.13417 (July 1, 2023) [...]
## 1.35.13327 (June 20, 2023) [...]
## 1.34.13295 (June 15, 2023) [...]
## 1.34.13120 (May 5, 2023) [...]
## 1.33.12934 (April 8, 2023) [...]
## 1.33.12924 (April 05, 2023) [...]
## 1.32.12895 (March 28, 2023) [...]
## 1.31.12821 (March 20, 2023) [...]
## 1.31.12740 (March 4, 2023) [...]
## 1.30.12484 (February 10, 2023) [...]
## 1.30.12450 (February 9, 2023) [...]
## 1.30.12417 (February 7, 2023) [...]
## 1.29.12304 (January 29, 2023) [...]
## 1.28.12200 (January 21, 2023) [...]
## 1.27.12010 (January 9, 2023) [...]
## 1.26.11866 (January 3, 2023) [...]
## 1.26.11753 (December 28, 2022) [...]
## 1.25.11652 (December 21, 2022) [...]
## 1.25.11537 (December 11, 2022) [...]
## 1.24.11420 (December 1, 2022) [...]
## 1.23.11234 (November 10, 2022) [...]
## 1.22.11089 (October 31, 2022) [...]
## 1.21.10985 (October 23, 2022) [...]
## 1.20.10937 (October 19, 2022) [...]
## 1.19.10893 (October 16, 2022) [...]
## 1.18.10692 (September 30, 2022) [...]
## 1.17.10641 (September 26, 2022) [...]
## 1.15.10535 (September 14, 2022) [...]
## 1.14.10471 (September 7, 2022) [...]
## 1.13.10390 (August 30, 2022) [...]
## 1.13.10378 (August 29, 2022) [...]
## 1.13.10301 (August 16, 2022) [...]
## 1.13.10239 (August 11, 2022) [...]
## 1.12.10140 (August 4, 2022) [...]
## 1.12.10040 (July 26, 2022) [...]
## 1.12.10022 (July 25, 2022) [...]
## 1.12.9985 (July 20, 2022) [...]
## 1.11.9762 (July 1, 2022) [...]
## 1.11.9761 (June 29, 2022) [...]
## 1.10.9721 (June 25, 2022) [...]
## 1.10.9716 (June 25, 2022) [...]
## 1.9.9585 (June 7, 2022) [...]
## 1.9.9479 (May 25, 2022) [...]
## 1.9.9277 (April 29, 2022) [...]
## 1.8.8970 (March 23, 2022) [...]
## 1.7.8766 (March 8, 2022) [...]
## 1.7.8717 (March 4, 2022) [...]
## 1.7.8637 (February 26, 2022) [...]
## 1.7.8627 (February 25, 2022) [...]
## 1.6.8588 (February 19, 2022) [...]
## 1.6.8479 (February 11, 2022) [...]
## 1.6.8448 (February 10, 2022) [...]
## 1.6.8324 (January 28, 2022) [...]
## 1.5.8292 (January 25, 2022) [...]
## 1.5.8280 (January 24, 2022) [...]
## 1.5.8204 (January 17, 2022) preview [...]
## 1.4.8059 (December 20, 2021) preview [...]
## 1.4.8033 (December 17, 2021) preview [...]
## 1.4.7597 (September 30, 2021) preview [...]
## 1.4.7534 (September 21, 2021) preview [...]
## 1.4.7520 (September 19, 2021) preview [...]
## 1.4.7494 (September 15, 2021) preview [...]
## 1.4.7449 (September 7, 2021) preview [...]
## 1.4.7295 (August 17, 2021) preview [...]
## 1.4.7254 (August 15, 2021) preview [...]
## 1.4.6982 (July 15, 2021) preview [...]
## 1.4.6842 (June 22, 2021) preview [...]
## 1.4.6822 (June 19, 2021) preview [...]
## 1.4.6762 (June 07, 2021) preview [...]
## 1.3.6645 (May 25, 2021) preview [...]
## 1.3.6632 (May 21, 2021) preview [...]
## 1.3.6616 (May 21, 2021) preview [...]
## 1.2.6549 (May 12, 2021) preview [...]
## 1.2.6469 (April 24, 2021) preview [...]
## 1.2.6305 (April 04, 2021) preview [...]
## 1.2.6273 (March 30, 2021) preview [...]
## 1.2.6177 (March 17, 2021) preview [...]
## 1.2.6021 (Feb 17, 2021) preview [...]
## 1.2.5988 (Feb 10, 2021) preview [...]
## 1.2.5973 (Feb 08, 2021) preview [...]
## 1.2.5931 (Jan 31, 2021) preview [...]
## 1.2.5887 (Jan 23, 2021) preview [...]
## 1.2.5843 (Jan 18, 2021) preview [...]
## 1.2.5783 (Jan 04, 2021) preview [...]
## 1.1.5686 (Dec 23, 2020) preview [...]
## 1.1.5620 (Dec 12, 2020) preview [...]
## 1.1.5595 (Dec 04, 2020) preview [...]
## 1.1.5532 (Nov 21, 2020) preview [...]
## 1.0.5403 (Oct 28, 2020) preview [...]
## 1.0.5342 (Oct 20, 2020) preview [...]
## 1.0.5264 (Sep 30, 2020) preview [...]
## 1.0.5229 (Sep 22, 2020) preview [...]
## 1.0.5153 (Aug 28, 2020) preview [...]
## 1.0.5087 (Aug 17, 2020) preview [...]
## 1.0.5044 (Aug 11, 2020) preview [...]
## 1.0.5029 (Aug 07, 2020) preview [...]
## 1.0.5015 (Aug 06, 2020) preview [...]
## 1.0.4975 (July 29, 2020) preview [...]
## 1.0.4934 (July 19, 2020) preview [...]
## 1.0.4908 (July 13, 2020) preview [...]
## 1.0.4698 (May 19, 2020) preview [...]
## 1.0.4666 (May 06, 2020) preview [...]
## 1.0.4654 (May 05, 2020) preview [...]
## 1.0.4608 (April 17, 2020) preview [...]
## 1.0.4394 (January 23, 2020) preview [...]
## 1.0.4277 (December 10, 2019) preview [...]
## 1.0.4229 (November 22, 2019) preview [...]
## 1.0.4187 (November 10, 2019) preview [...]
## 1.0.4168 (November 4, 2019) preview [...]
## 1.0.4145 (October 24, 2019) preview [...]
## 1.0.4009 (September 23, 2019) preview [...]
## 1.0.3951 (September 9, 2019) preview [...]
## 1.0.3936 (September 5, 2019) preview [...]
## 1.0.3774 (August 1, 2019) preview [...]
## 1.0.3748 (July 24, 2019) preview [...]
## 1.0.3703 (July 17, 2019) preview [...]
## 1.0.3645 (July 11, 2019) preview [...]
## 1.0.3603 (July 8, 2019) preview [...]
## 1.0.3593 (July 5, 2019) preview [...]
## 1.0.3574 (July 2, 2019) preview [...]
## 1.0.3547 (June 27, 2019) preview [...]
## 1.0.3525 (June 24, 2019) preview [...]
## 1.0.3507 (June 22, 2019) preview [...]
## 1.0.3483 (June 17, 2019) preview [...]
## 1.0.3471 (June 12, 2019) preview [...]
## 1.0.3435 (May 28, 2019) preview [...]
## 1.0.3428 (May 27, 2019) preview [...]
## 1.0.3386 (May 9, 2019) preview [...]
## 1.0.3348 (Apr 23, 2019) preview [...]
## 1.0.3241 (Mar 4, 2019) preview [...]
## 1.0.3230 (Feb 27, 2019) preview [...]
## 1.0.3202 (Feb 20, 2019) preview [...]
## 1.0.3185 (Feb 14, 2019) preview [...]
## 1.0.3174 (Feb 12, 2019) preview [...]
## 1.0.3058 (Dec 30, 2018) preview [...]
## 1.0.3031 (Dec 3, 2018) preview [...]
## 1.0.3003 (Nov 26, 2018) preview [...]
## 1.0.2930 (Nov 3, 2018) preview [...]
## 1.0.2915 (Oct 30, 2018) preview [...]
## 1.0.2895 (Oct 23, 2018) preview [...]
## 1.0.2802 (Oct 11, 2018) preview [...]
## 1.0.2765 (Oct 8, 2018) preview [...]
## 1.0.2738 (Oct 3, 2018) preview [...]
## 1.0.2681 (Sep 27, 2018) preview [...]
## 1.0.2590 (Sep 14, 2018) preview [...]

