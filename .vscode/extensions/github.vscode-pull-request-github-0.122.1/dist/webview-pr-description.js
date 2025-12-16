var ic=Object.defineProperty;var i=(zl,hi)=>ic(zl,"name",{value:hi,configurable:!0});(()=>{var zl={2410:(_,k,U)=>{"use strict";U.d(k,{A:i(()=>D,"A")});var K=U(1601),V=U.n(K),T=U(6314),v=U.n(T),h=v()(V());h.push([_.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

body a {
	text-decoration: var(--text-link-decoration);
}

h3 {
	display: unset;
	font-size: unset;
	margin-block-start: unset;
	margin-block-end: unset;
	margin-inline-start: unset;
	margin-inline-end: unset;
	font-weight: unset;
}

body a:hover {
	text-decoration: underline;
}

button,
input[type='submit'] {
	color: var(--vscode-button-foreground);
	font-family: var(--vscode-font-family);
	border-radius: 2px;
	border: 1px solid transparent;
	padding: 4px 12px;
	font-size: 13px;
	line-height: 18px;
	white-space: nowrap;
	user-select: none;
}

button:not(.icon-button):not(.danger):not(.secondary),
input[type='submit'] {
	background-color: var(--vscode-button-background);
}

input.select-left {
	border-radius: 2px 0 0 2px;
}

button.select-right {
	border-radius: 0 2px 2px 0;
	width: 24px;
	position: relative;
}

button.select-right span {
	position: absolute;
	top: 2px;
	right: 4px;
}

button:focus,
input[type='submit']:focus {
	outline-color: var(--vscode-focusBorder);
	outline-style: solid;
	outline-width: 1px;
	outline-offset: 2px;
}

button:hover:enabled,
button:focus:enabled,
input[type='submit']:focus:enabled,
input[type='submit']:hover:enabled {
	background-color: var(--vscode-button-hoverBackground);
	cursor: pointer;
}

button.secondary {
	background-color: var(--vscode-button-secondaryBackground);
	color: var(--vscode-button-secondaryForeground);
}

button.secondary:hover:enabled,
button.secondary:focus:enabled,
input[type='submit'].secondary:focus:enabled,
input[type='submit'].secondary:hover:enabled {
	background-color: var(--vscode-button-secondaryHoverBackground);
}

textarea,
input[type='text'] {
	display: block;
	box-sizing: border-box;
	padding: 8px;
	width: 100%;
	resize: vertical;
	font-size: 13px;
	border: 1px solid var(--vscode-dropdown-border);
	background-color: var(--vscode-input-background);
	color: var(--vscode-input-foreground);
	font-family: var(--vscode-font-family);
	border-radius: 2px;
}

textarea::placeholder,
input[type='text']::placeholder {
	color: var(--vscode-input-placeholderForeground);
}

select {
	display: block;
	box-sizing: border-box;
	padding: 4px 8px;
	border-radius: 2px;
	font-size: 13px;
	border: 1px solid var(--vscode-dropdown-border);
	background-color: var(--vscode-dropdown-background);
	color: var(--vscode-dropdown-foreground);
}

textarea:focus,
input[type='text']:focus,
input[type='checkbox']:focus,
select:focus {
	outline: 1px solid var(--vscode-focusBorder);
}

input[type='checkbox'] {
	outline-offset: 1px;
}

.vscode-high-contrast input[type='checkbox'] {
	outline: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast input[type='checkbox']:focus {
	outline: 1px solid var(--vscode-contrastActiveBorder);
}

svg path:first-of-type {
	fill: var(--vscode-foreground);
}

body button:disabled,
input[type='submit']:disabled {
	opacity: 0.4;
}

body .hidden {
	display: none !important;
}

body img.avatar,
body span.avatar-icon svg {
	width: 20px;
	height: 20px;
	border-radius: 50%;
}

body img.avatar {
	vertical-align: middle;
}

.avatar-link {
	flex-shrink: 0;
}

.icon-button {
	display: flex;
	padding: 2px;
	background: transparent;
	border-radius: 4px;
	line-height: 0;
}

.icon-button:hover,
.title .icon-button:hover,
.title .icon-button:focus,
.section .icon-button:hover,
.section .icon-button:focus {
	background-color: var(--vscode-toolbar-hoverBackground);
}

.icon-button:focus,
.title .icon-button:focus,
.section .icon-button:focus {
	outline: 1px solid var(--vscode-focusBorder);
	outline-offset: 1px;
}

.label .icon-button:hover,
.label .icon-button:focus {
	background-color: transparent;
}

.section-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.section-item .avatar-link {
	margin-right: 8px;
}

.section-item .avatar-container {
	flex-shrink: 0;
}

.section-item .login {
	width: 129px;
	flex-shrink: 0;
}

.section-item img.avatar {
	width: 20px;
	height: 20px;
}

.section-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3px;
}

.section-icon.changes svg path {
	fill: var(--vscode-list-errorForeground);
}

.section-icon.commented svg path,
.section-icon.requested svg path {
	fill: var(--vscode-list-warningForeground);
}

.section-icon.approved svg path {
	fill: var(--vscode-issues-open);
}

.reviewer-icons {
	display: flex;
	gap: 4px;
}

.reviewer-icons [role='alert'] {
	position: absolute;
	width: 0;
	height: 0;
	overflow: hidden;
}

.push-right {
	margin-left: auto;
}

.avatar-with-author {
	display: flex;
	align-items: center;
}

.author-link {
	font-weight: 600;
	color: var(--vscode-editor-foreground);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.status-item button {
	margin-left: auto;
	margin-right: 0;
}

.automerge-section {
	display: flex;
}

.automerge-section,
.status-section {
	flex-wrap: wrap;
}

#status-checks .automerge-section {
	align-items: center;
	padding: 16px;
	background: var(--vscode-editorHoverWidget-background);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.automerge-section .merge-select-container {
	margin-left: 8px;
}

.automerge-checkbox-wrapper,
.automerge-checkbox-label {
	display: flex;
	align-items: center;
	margin-right: 4px;
}

.automerge-checkbox-label {
	min-width: 80px;
}

.merge-queue-title .merge-queue-pending {
	color: var(--vscode-list-warningForeground);
}

.merge-queue-title .merge-queue-blocked {
	color: var(--vscode-list-errorForeground);
}

.merge-queue-title {
	font-weight: bold;
	font-size: larger;
}

/** Theming */

.vscode-high-contrast button:not(.secondary):not(.icon-button) {
	background: var(--vscode-button-background);
}


.vscode-high-contrast input {
	outline: none;
	background: var(--vscode-input-background);
	border: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast button:focus {
	border: 1px solid var(--vscode-contrastActiveBorder);
}

.vscode-high-contrast button:hover {
	border: 1px dotted var(--vscode-contrastActiveBorder);
}

::-webkit-scrollbar-corner {
	display: none;
}

.labels-list {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.label {
	display: flex;
	justify-content: normal;
	padding: 0 8px;
	border-radius: 20px;
	border-style: solid;
	border-width: 1px;
	background: var(--vscode-badge-background);
	color: var(--vscode-badge-foreground);
	font-size: 11px;
	line-height: 18px;
	font-weight: 600;
}

/* split button */

.primary-split-button {
	display: flex;
	flex-grow: 1;
	min-width: 0;
	max-width: 260px;
}

button.split-left {
	border-radius: 2px 0 0 2px;
	flex-grow: 1;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	display: flex;
}

.split {
	background-color: var(--vscode-button-background);
	border-top: 1px solid var(--vscode-button-border);
	border-bottom: 1px solid var(--vscode-button-border);
	padding: 4px 0;
}

.split .separator {
	height: 100%;
	width: 1px;
	background-color: var(--vscode-button-separator);
}

.split.disabled {
	opacity: 0.4;
}

.split.secondary {
	background-color: var(--vscode-button-secondaryBackground);
	border-top: 1px solid var(--vscode-button-secondaryBorder);
	border-bottom: 1px solid var(--vscode-button-secondaryBorder);
}

button.split-right {
	border-radius: 0 2px 2px 0;
	cursor: pointer;
	width: 24px;
	position: relative;
}

button.split-right:disabled {
	cursor: default;
}

button.split-right .icon {
	pointer-events: none;
	position: absolute;
	top: 4px;
	right: 4px;
}

button.split-right .icon svg path {
	fill: unset;
}

button.input-box {
	display: block;
	height: 24px;
	margin-top: -4px;
	padding-top: 2px;
	padding-left: 8px;
	text-align: left;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: var(--vscode-input-foreground) !important;
	background-color: var(--vscode-input-background) !important;
}

button.input-box:active,
button.input-box:focus {
	color: var(--vscode-inputOption-activeForeground) !important;
	background-color: var(--vscode-inputOption-activeBackground) !important;
}

button.input-box:hover:not(:disabled) {
	background-color: var(--vscode-inputOption-hoverBackground) !important;
}

button.input-box:focus {
	border-color: var(--vscode-focusBorder) !important;
}

.dropdown-container {
	display: flex;
	min-width: 0;
	margin: 0;
}

.dropdown-container.spreadable {
	flex-grow: 1;
	width: 100%;
}

button.inlined-dropdown {
	width: 100%;
	max-width: 150px;
	margin-right: 8px;
	display: inline-block;
	text-align: center;
}

button.inlined-dropdown:last-child {
	margin-right: 0;
}

.spinner {
	margin-top: 5px;
	margin-left: 5px;
}

.commit-spinner-inline {
	margin-left: 8px;
	display: inline-flex;
	align-items: center;
	vertical-align: middle;
	grid-column: none;
}

.commit-spinner-before {
	margin-right: 6px;
	display: inline-flex;
	align-items: center;
	vertical-align: middle;
}

.loading {
	animation: spinner-rotate 1s linear infinite;
}

@keyframes spinner-rotate {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}`,""]);const D=h},3554:(_,k,U)=>{"use strict";U.d(k,{A:i(()=>D,"A")});var K=U(1601),V=U.n(K),T=U(6314),v=U.n(T),h=v()(V());h.push([_.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

#app {
	display: grid;
	grid-template-columns: 1fr minmax(200px, 300px);
	column-gap: 32px;
}

#title {
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row: 1;
}

#main {
	grid-column: 1;
	grid-row: 2;
	display: flex;
	flex-direction: column;
	gap: 16px;
}

#sidebar {
	display: flex;
	flex-direction: column;
	gap: 16px;
	grid-column: 2;
	grid-row: 2;
}

#project a {
	cursor: pointer;
}

a:focus,
input:focus,
select:focus,
textarea:focus,
.title-text:focus {
	outline: 1px solid var(--vscode-focusBorder);
}

.title-text {
	margin-right: 5px;
}

.title {
	display: flex;
	align-items: flex-start;
	margin: 20px 0 24px;
	padding-bottom: 24px;
	border-bottom: 1px solid var(--vscode-list-inactiveSelectionBackground);
}

.title .pr-number {
	margin-left: 5px;
}

.loading-indicator {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.loading-button {
	display: inline-flex;
	align-items: center;
	margin-right: 4px;
}

.comment-body li div {
	display: inline;
}

.comment-body li div.Box,
.comment-body li div.Box div {
	display: block;
}

.comment-body code,
.comment-body a,
span.lineContent {
	overflow-wrap: anywhere;
}

.comment-reactions {
	display: flex;
	flex-direction: row;
}

.comment-reactions div {
	font-size: 1.1em;
	cursor: pointer;
	user-select: none;
}

.comment-reactions .reaction-label {
	border-radius: 5px;
	border: 1px solid var(--vscode-panel-border);
	width: 14px;
}

#title:empty {
	border: none;
}

h2 {
	margin: 0;
}

body hr {
	display: block;
	height: 1px;
	border: 0;
	border-top: 1px solid #555;
	margin: 0 !important;
	padding: 0;
}

body .comment-container .avatar-container {
	margin-right: 12px;
}

body .comment-container .avatar-container a {
	display: flex;
}

body .comment-container .avatar-container img.avatar,
body .comment-container .avatar-container .avatar-icon svg {
	margin-right: 0;
}

.vscode-light .avatar-icon {
	filter: invert(100%);
}

body a.avatar-link:focus {
	outline-offset: 2px;
}

body .comment-container.comment,
body .comment-container.review {
	background-color: var(--vscode-editor-background);
}

.review-comment-container {
	width: 100%;
	max-width: 1000px;
	display: flex;
	flex-direction: column;
	position: relative;
}

body #main .comment-container>.review-comment-container>.review-comment-header:not(:nth-last-child(2)) {
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

body .comment-container .review-comment-header {
	position: relative;
	display: flex;
	width: 100%;
	box-sizing: border-box;
	padding: 8px 16px;
	color: var(--vscode-foreground);
	align-items: center;
	background: var(--vscode-editorWidget-background);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.review-comment-header.no-details {
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.description-header {
	float: right;
	height: 32px;
}

.review-comment-header .comment-actions {
	margin-left: auto;
}

.review-comment-header .pending {
	color: inherit;
	font-style: italic;
}

.comment-actions button {
	background-color: transparent;
	padding: 0;
	line-height: normal;
	font-size: 11px;
}

.comment-actions button svg {
	margin-right: 0;
	height: 14px;
}

.comment-actions .icon-button {
	padding-left: 2px;
	padding-top: 2px;
}

.status-scroll {
	max-height: 220px;
	overflow-y: auto;
}

.status-check {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 16px;
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

.status-check-details {
	display: flex;
	align-items: center;
	gap: 8px;
}

#merge-on-github {
	margin-top: 10px;
}

.status-item {
	padding: 12px 16px;
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

.status-item:first-of-type {
	background: var(--vscode-editorWidget-background);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.status-item,
.form-actions,
.ready-for-review-text-wrapper {
	display: flex;
	gap: 8px;
	align-items: center;
}

.status-item .button-container {
	margin-left: auto;
	margin-right: 0;
}

.commit-association {
	display: flex;
	font-style: italic;
	flex-direction: row-reverse;
	padding-top: 7px;
}

.commit-association span {
	flex-direction: row;
}

.email {
	font-weight: bold;
}

button.input-box {
	float: right;
}

.status-item-detail-text {
	display: flex;
	gap: 8px;
}

.status-check-detail-text {
	margin-right: 8px;
}

.status-section p {
	margin: 0;
}

.status-section .check svg path {
	fill: var(--vscode-issues-open);
}

.status-section .close svg path {
	fill: var(--vscode-errorForeground);
}

.status-section .pending svg path,
.status-section .skip svg path {
	fill: var(--vscode-list-warningForeground);
}

.merge-queue-container,
.ready-for-review-container {
	padding: 16px;
	background-color: var(--vscode-editorWidget-background);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.ready-for-review-icon {
	width: 16px;
	height: 16px;
}

.ready-for-review-heading {
	font-weight: 600;
}

.ready-for-review-meta {
	font-size: 0.9;
}

#status-checks {
	border: 1px solid var(--vscode-editorHoverWidget-border);
	border-radius: 4px;
}

#status-checks .label {
	display: inline-flex;
	margin-right: 16px;
}

#status-checks a {
	cursor: pointer;
}

#status-checks summary {
	display: flex;
	align-items: center;
}

#status-checks-display-button {
	margin-left: auto;
}

#status-checks .avatar-link svg {
	width: 24px;
	margin-right: 0px;
	vertical-align: middle;
}

.status-check .avatar-link .avatar-icon {
	margin-right: 0px;
}

#status-checks .merge-select-container {
	display: flex;
	align-items: center;
	background-color: var(--vscode-editorWidget-background);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

#status-checks .merge-select-container>* {
	margin-right: 5px;
}

#status-checks .merge-select-container>select {
	margin-left: 5px;
}

#status-checks .branch-status-container {
	display: inline-block;
}

#status-checks .branch-status-message {
	display: inline-block;
	line-height: 100%;
	padding: 16px;
}

body .comment-container .review-comment-header>span,
body .comment-container .review-comment-header>a,
body .merged .merged-message>a {
	margin-right: 6px;
}

body .commit .commit-message>a {
	margin-right: 3px;
}

body .comment-container .review-comment-container .pending-label,
body .resolved-container .outdatedLabel {
	background: var(--vscode-badge-background);
	color: var(--vscode-badge-foreground);
	font-size: 11px;
	font-weight: 600;
	border-radius: 20px;
	padding: 4px 8px;
	margin-left: 6px;
}

body .resolved-container .unresolvedLabel {
	font-style: italic;
	margin-left: 5px;
}

body .diff .diffPath {
	margin-right: 4px;
}

.comment-container form,
#merge-comment-form {
	padding: 16px;
	background-color: var(--vscode-editorWidget-background);
}

body .comment-container .comment-body,
.review-body {
	padding: 16px;
	border-top: none;
}

body .comment-container .review-comment-container .review-comment-body {
	display: flex;
	flex-direction: column;
	gap: 16px;
	border: none;
}

body .comment-container .comment-body>p,
body .comment-container .comment-body>div>p,
body .comment-container .comment-body>div>ul,
.comment-container .review-body>p {
	margin-top: 0;
	line-height: 1.5em;
}

body .comment-container .comment-body>p:last-child,
body .comment-container .comment-body>div>p:last-child,
.comment-container .review-body>p:last-child {
	margin-bottom: 0;
}

body {
	margin: auto;
	width: 100%;
	max-width: 1280px;
	padding: 0 32px;
	box-sizing: border-box;
}

body .hidden-focusable {
	height: 0 !important;
	overflow: hidden;
}

.comment-actions button:hover:enabled,
.comment-actions button:focus:enabled {
	background-color: transparent;
}

body button.checkedOut {
	color: var(--vscode-foreground);
	opacity: 1 !important;
	background-color: transparent;
}

body button .icon {
	width: 16px;
	height: 16px;
}

.prIcon {
	display: flex;
	border-radius: 10px;
	margin-right: 5px;
	margin-top: 18px;
}

.overview-title {
	display: flex;
	align-items: center;
}

.overview-title h2 {
	font-size: 32px;
	margin-right: 6px;
}

.overview-title textarea {
	min-height: 50px;
}

.title-container {
	width: 100%;
}

.subtitle {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 12px;
}

.subtitle .avatar,
.subtitle .avatar-icon svg {
	margin-right: 6px;
}

.subtitle .author {
	display: flex;
	align-items: center;
}

.merge-branches {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	flex-wrap: wrap;
}

.branch-tag {
	margin-top: 3px;
	padding: 2px 4px;
	background: var(--vscode-editorInlayHint-background);
	color: var(--vscode-editorInlayHint-foreground);
	border-radius: 4px;
}

.subtitle .created-at {
	margin-left: auto;
	white-space: nowrap;
}

.button-group {
	display: flex;
	gap: 8px;
	flex-wrap: wrap;
	align-items: flex-start;
}

small-button {
	display: flex;
	font-size: 11px;
	padding: 0 5px;
}

.header-actions {
	display: flex;
	gap: 8px;
	padding-top: 4px;
}

.header-actions>div:first-of-type {
	flex: 1;
}

:not(.status-item)>.small-button {
	font-weight: 600;
}

#status {
	box-sizing: border-box;
	line-height: 18px;
	color: var(--vscode-button-foreground);
	border-radius: 18px;
	padding: 4px 12px;
	margin-right: 10px;
	font-weight: 600;
	display: flex;
	gap: 4px;
}

#status svg path {
	fill: var(--vscode-button-foreground);
}

.vscode-high-contrast #status {
	border: 1px solid var(--vscode-contrastBorder);
	background-color: var(--vscode-badge-background);
	color: var(--vscode-badge-foreground);
}

.vscode-high-contrast #status svg path {
	fill: var(--vscode-badge-foreground);
}

.status-badge-merged {
	background-color: var(--vscode-pullRequests-merged);
}

.status-badge-open {
	background-color: var(--vscode-pullRequests-open);
}

.status-badge-closed {
	background-color: var(--vscode-pullRequests-closed);
}

.status-badge-draft {
	background-color: var(--vscode-pullRequests-draft);
}

.section {
	padding-bottom: 16px;
	border-bottom: 1px solid var(--vscode-editorWidget-border);
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.section:last-of-type {
	padding-bottom: 0px;
	border-bottom: none;
}

.section-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.section-header.clickable {
	cursor: pointer;
}

.section-header .section-title {
	font-weight: 600;
}

.section-placeholder {
	color: var(--vscode-descriptionForeground);
}

.assign-yourself:hover {
	cursor: pointer;
}

.section svg {
	width: 16px;
	height: 16px;
	display: block;
	margin-right: 0;
}

.section .icon-button,
.section .icon-button .icon {
	color: currentColor;
}

.icon-button-group {
	display: flex;
	flex-direction: row;
}

.section svg path {
	fill: currentColor;
}

.commit svg {
	width: 16px;
	height: auto;
	margin-right: 8px;
	flex-shrink: 0;
}

.comment-container.commit {
	border: none;
	padding: 4px 16px;
}

.comment-container.commit,
.comment-container.merged {
	box-sizing: border-box;
}

.commit,
.review,
.merged {
	display: flex;
	width: 100%;
	border: none;
	color: var(--vscode-foreground);
}

.review {
	margin: 0px 8px;
	padding: 4px 0;
}

.commit .commit-message,
.commit .timeline-with-detail,
.merged .merged-message {
	align-items: center;
	overflow: hidden;
	flex-grow: 1;
}

.commit .commit-message,
.merged .merged-message {
	display: flex;
}

.commit .timeline-with-detail {
	display: block;
}

.commit-message-detail {
	margin-left: 20px;
}

.commit .commit-message .avatar-container,
.merged .merged-message .avatar-container {
	margin-right: 4px;
	flex-shrink: 0;
}

.commit-message .icon {
	padding-top: 2px;
}

.commit .avatar-container .avatar,
.commit .avatar-container .avatar-icon,
.commit .avatar-container .avatar-icon svg,
.merged .avatar-container .avatar,
.merged .avatar-container .avatar-icon,
.merged .avatar-container .avatar-icon svg {
	width: 18px;
	height: 18px;
}

.message-container {
	display: inline-grid;
}

.commit .commit-message .message,
.merged .merged-message .message {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.commit .commit-message a.message {
	cursor: pointer;
}

.timeline-detail {
	display: flex;
	align-items: center;
	gap: 8px;
}

.commit .sha {
	min-width: 50px;
	font-family: var(--vscode-editor-font-family);
	margin-bottom: -2px;
	cursor: pointer;
}

.merged .merged-message .message,
.merged .inline-sha {
	margin: 0 4px 0 0;
}

.merged svg {
	width: 14px;
	height: auto;
	margin-right: 8px;
	flex-shrink: 0;
}

.details {
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;
}

#description .comment-container {
	padding-top: 0px;
}

.comment-container {
	position: relative;
	width: 100%;
	display: flex;
	margin: 0;
	align-items: center;
	border-radius: 4px;
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.comment-container[data-type='commit'] {
	padding: 8px 0;
	border: none;
}

.comment-container[data-type='commit']+.comment-container[data-type='commit'] {
	border-top: none;
}

.comment-body .review-comment {
	box-sizing: border-box;
	border-top: 1px solid var(--vscode-editorHoverWidget-border);
}

.resolve-comment-row {
	display: flex;
	align-items: center;
	padding: 16px;
	background-color: var(--vscode-editorHoverWidget-background);
	border-top: 1px solid var(--vscode-editorHoverWidget-border);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.review-comment-container .review-comment .review-comment-header {
	padding: 16px 16px 8px 16px;
	border: none;
	background: none;
}

.review-comment-container .review-comment .comment-body {
	border: none;
	padding: 0px 16px 8px 16px;
}

.review-comment-container .review-comment .comment-body:last-of-type {
	padding: 0px 16px 16px 16px;
}

.comment-body .line {
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 8px;
}

body .comment-form {
	padding: 20px 0 10px;
}

.review-comment-container .comment-form {
	margin: 0 0 0 36px;
	padding: 10px 0;
}

.task-list-item {
	list-style-type: none;
}

#status-checks textarea {
	margin-top: 10px;
}

textarea {
	min-height: 100px;
	max-height: 500px;
}

.editing-form {
	padding: 5px 0;
	display: flex;
	flex-direction: row;
	min-width: 300px;
}

.editing-form .form-actions {
	display: flex;
	gap: 8px;
	justify-content: flex-end;
}

.comment-form .form-actions>button,
.comment-form .form-actions>input[type='submit'] {
	margin-right: 0;
	margin-left: 0;
}

.primary-split-button {
	flex-grow: unset;
}

:not(.button-group) .dropdown-container {
	justify-content: right;
}

:not(.title-editing-form)>.form-actions {
	justify-content: flex-end;
	padding-top: 10px;
}

#rebase-actions {
	flex-direction: row-reverse;
}

.main-comment-form>.form-actions {
	margin-bottom: 10px;
}

.details .comment-body {
	padding: 19px 0;
}

blockquote {
	display: block;
	flex-direction: column;
	margin: 8px 0;
	padding: 8px 12px;
	border-left-width: 5px;
	border-left-style: solid;
}

blockquote p {
	margin: 8px 0;
}

blockquote p:first-child {
	margin-top: 0;
}

blockquote p:last-child {
	margin-bottom: 0;
}

.comment-body a:focus,
.comment-body input:focus,
.comment-body select:focus,
.comment-body textarea:focus {
	outline-offset: -1px;
}

.comment-body hr {
	border: 0;
	height: 2px;
	border-bottom: 2px solid;
}

.comment-body h1 {
	padding-bottom: 0.3em;
	line-height: 1.2;
	border-bottom-width: 1px;
	border-bottom-style: solid;
}

.comment-body h1,
h2,
h3 {
	font-weight: normal;
}

.comment-body h1 code,
.comment-body h2 code,
.comment-body h3 code,
.comment-body h4 code,
.comment-body h5 code,
.comment-body h6 code {
	font-size: inherit;
	line-height: auto;
}

.comment-body table {
	border-collapse: collapse;
}

.comment-body table>thead>tr>th {
	text-align: left;
	border-bottom: 1px solid;
}

.comment-body table>thead>tr>th,
.comment-body table>thead>tr>td,
.comment-body table>tbody>tr>th,
.comment-body table>tbody>tr>td {
	padding: 5px 10px;
}

.comment-body table>tbody>tr+tr>td {
	border-top: 1px solid;
}

code {
	font-family: var(--vscode-editor-font-family), Menlo, Monaco, Consolas, 'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback';
}

.comment-body .snippet-clipboard-content {
	display: grid;
}

.comment-body video {
	width: 100%;
	border: 1px solid var(--vscode-editorWidget-border);
	border-radius: 4px;
}

.comment-body summary {
	margin-bottom: 8px;
}

.comment-body details summary::marker {
	display: flex;
}

.comment-body details summary svg {
	margin-left: 8px;
}

.comment-body body.wordWrap pre {
	white-space: pre-wrap;
}

.comment-body .mac code {
	font-size: 12px;
	line-height: 18px;
}

.comment-body pre:not(.hljs),
.comment-body pre.hljs code>div {
	padding: 16px;
	border-radius: 3px;
	overflow: auto;
}

.timestamp,
.timestamp:hover {
	color: var(--vscode-descriptionForeground);
	white-space: nowrap;
}

.timestamp {
	overflow: hidden;
	text-overflow: ellipsis;
	padding-left: 8px;
}

/** Theming */

.comment-body pre code {
	color: var(--vscode-editor-foreground);
}

.vscode-light .comment-body pre:not(.hljs),
.vscode-light .comment-body code>div {
	background-color: rgba(220, 220, 220, 0.4);
}

.vscode-dark .comment-body pre:not(.hljs),
.vscode-dark .comment-body code>div {
	background-color: rgba(10, 10, 10, 0.4);
}

.vscode-high-contrast .comment-body pre:not(.hljs),
.vscode-high-contrast .comment-body code>div {
	background-color: var(--vscode-editor-background);
	border: 1px solid var(--vscode-panel-border);
}

.vscode-high-contrast .comment-body h1 {
	border: 1px solid rgb(0, 0, 0);
}

.vscode-high-contrast .comment-container .review-comment-header,
.vscode-high-contrast #status-checks {
	background: none;
	border: 1px solid var(--vscode-panel-border);
}

.vscode-high-contrast .comment-container .comment-body,
.vscode-high-contrast .review-comment-container .review-body {
	border: 1px solid var(--vscode-panel-border);
}

.vscode-light .comment-body table>thead>tr>th {
	border-color: rgba(0, 0, 0, 0.69);
}

.vscode-dark .comment-body table>thead>tr>th {
	border-color: rgba(255, 255, 255, 0.69);
}

.vscode-light .comment-body h1,
.vscode-light .comment-body hr,
.vscode-light .comment-body table>tbody>tr+tr>td {
	border-color: rgba(0, 0, 0, 0.18);
}

.vscode-dark .comment-body h1,
.vscode-dark .comment-body hr,
.vscode-dark .comment-body table>tbody>tr+tr>td {
	border-color: rgba(255, 255, 255, 0.18);
}

.review-comment-body .diff-container {
	border-radius: 4px;
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.review-comment-body .diff-container .review-comment-container .comment-container {
	padding-top: 0;
}

.review-comment-body .diff-container .comment-container {
	border: none;
}

.review-comment-body .diff-container .review-comment-container .review-comment-header .avatar-container {
	margin-right: 4px;
}

.review-comment-body .diff-container .review-comment-container .review-comment-header .avatar {
	width: 18px;
	height: 18px;
}

.review-comment-body .diff-container .diff {
	border-top: 1px solid var(--vscode-editorWidget-border);
	overflow: scroll;
}

.resolved-container {
	padding: 6px 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: var(--vscode-editorWidget-background);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.resolved-container .diffPath:hover {
	text-decoration: underline;
	color: var(--vscode-textLink-activeForeground);
	cursor: pointer;
}

.diff .diffLine {
	display: flex;
	font-size: 12px;
	line-height: 20px;
}

.win32 .diff .diffLine {
	font-family: var(--vscode-editor-font-family), Consolas, Inconsolata, 'Courier New', monospace;
}

.darwin .diff .diffLine {
	font-family: var(--vscode-editor-font-family), Monaco, Menlo, Inconsolata, 'Courier New', monospace;
}

.linux .diff .diffLine {
	font-family: var(--vscode-editor-font-family), 'Droid Sans Mono', Inconsolata, 'Courier New', monospace, 'Droid Sans Fallback';
}

.diff .diffLine.add {
	background-color: var(--vscode-diffEditor-insertedTextBackground);
}

.diff .diffLine.delete {
	background-color: var(--vscode-diffEditor-removedTextBackground);
}

.diff .diffLine .diffTypeSign {
	user-select: none;
	padding-right: 5px;
}

.diff .diffLine .lineNumber {
	width: 1%;
	min-width: 50px;
	padding-right: 10px;
	padding-left: 10px;
	font-size: 12px;
	line-height: 20px;
	text-align: right;
	white-space: nowrap;
	box-sizing: border-box;
	display: block;
	user-select: none;
	font-family: var(--vscode-editor-font-family);
}

.github-checkbox {
	pointer-events: none;
}

.github-checkbox input {
	color: rgb(84, 84, 84);
	opacity: 0.6;
}

/* High Contrast Mode */

.vscode-high-contrast a:focus {
	outline-color: var(--vscode-contrastActiveBorder);
}

.vscode-high-contrast .title {
	border-bottom: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast .diff .diffLine {
	background: none;
}

.vscode-high-contrast .resolved-container {
	background: none;
}

.vscode-high-contrast .diff-container {
	border: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast .diff .diffLine.add {
	border: 1px dashed var(--vscode-diffEditor-insertedTextBorder);
}

.vscode-high-contrast .diff .diffLine.delete {
	border: 1px dashed var(--vscode-diffEditor-removedTextBorder);
}

@media (max-width: 768px) {
	.title {
		border-bottom: none;
		padding-bottom: 0px;
	}

	#app {
		display: block;
	}

	#sidebar {
		display: grid;
		column-gap: 20px;
		row-gap: 12px;
		grid-template-columns: calc(50% - 10px) calc(50% - 10px);
		padding: 0;
	}

	.section-content {
		display: flex;
		flex-wrap: wrap;
	}

	.section-item {
		display: flex;
	}

	body .hidden-focusable {
		height: initial;
		overflow: initial;
	}

	.section-header button {
		display: flex;
	}

	.section-item .login {
		width: auto;
		margin-right: 4px;
	}

	/* Hides bottom borders on bottom two sections */
	.section:nth-last-child(-n + 2) {
		border-bottom: none;
	}
}

.icon {
	width: 16px;
	height: 16px;
	font-size: 16px;
	display: flex;
}

.icon.copilot-icon {
	margin-right: 6px;
}

.action-bar {
	position: absolute;
	display: flex;
	justify-content: space-between;
	z-index: 100;
	top: 9px;
	right: 9px;
}

.flex-action-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
	margin-left: 9px;
	min-width: 42px;
}

.action-bar>button,
.flex-action-bar>button {
	margin-left: 4px;
	margin-right: 4px;
}

.title-editing-form {
	flex-grow: 1;
}

.title-editing-form>.form-actions {
	margin-left: 8px;
}

/* permalinks */
.comment-body .Box p {
	margin-block-start: 0px;
	margin-block-end: 0px;
}

.comment-body .Box {
	border-radius: 4px;
	border-style: solid;
	border-width: 1px;
	border-color: var(--vscode-editorHoverWidget-border);
}

.comment-body .Box-header {
	background-color: var(--vscode-editorWidget-background);
	color: var(--vscode-disabledForeground);
	border-bottom-style: solid;
	border-bottom-width: 1px;
	padding: 8px 16px;
	border-bottom-color: var(--vscode-editorHoverWidget-border);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.comment-body .blob-num {
	word-wrap: break-word;
	box-sizing: border-box;
	border: 0 !important;
	padding-top: 0 !important;
	padding-bottom: 0 !important;
	min-width: 50px;
	font-family: var(--vscode-editor-font-family);
	font-size: 12px;
	color: var(--vscode-editorLineNumber-foreground);
	line-height: 20px;
	text-align: right;
	white-space: nowrap;
	vertical-align: top;
	cursor: pointer;
	user-select: none;
}

.comment-body .blob-num::before {
	content: attr(data-line-number);
}

.comment-body .blob-code-inner {
	tab-size: 8;
	border: 0 !important;
	padding-top: 0 !important;
	padding-bottom: 0 !important;
	line-height: 20px;
	vertical-align: top;
	display: table-cell;
	overflow: visible;
	font-family: var(--vscode-editor-font-family);
	font-size: 12px;
	word-wrap: anywhere;
	text-indent: 0;
	white-space: pre-wrap;
}

.comment-body .commit-tease-sha {
	font-family: var(--vscode-editor-font-family);
	font-size: 12px;
}

/* Suggestion */
.comment-body .blob-wrapper.data.file .d-table {
	border-radius: 4px;
	border-style: solid;
	border-width: 1px;
	border-collapse: unset;
	border-color: var(--vscode-editorHoverWidget-border);
}

.comment-body .js-suggested-changes-blob {
	border-collapse: collapse;
}

.blob-code-deletion,
.blob-num-deletion {
	border-collapse: collapse;
	background-color: var(--vscode-diffEditor-removedLineBackground);
}

.blob-code-addition,
.blob-num-addition {
	border-collapse: collapse;
	background-color: var(--vscode-diffEditor-insertedLineBackground);
}

.blob-code-marker-addition::before {
	content: "+ ";
}

.blob-code-marker-deletion::before {
	content: "- ";
}

.markdown-alert.markdown-alert-warning {
	border-left: .25em solid var(--vscode-editorWarning-foreground);
}

.markdown-alert.markdown-alert-warning .markdown-alert-title {
	color: var(--vscode-editorWarning-foreground);
}

.markdown-alert.markdown-alert-note {
	border-left: .25em solid var(--vscode-editorInfo-foreground);
}

.markdown-alert.markdown-alert-note .markdown-alert-title {
	color: var(--vscode-editorInfo-foreground);
}

.markdown-alert.markdown-alert-tip {
	border-left: .25em solid var(--vscode-testing-iconPassed);
}

.markdown-alert.markdown-alert-tip .markdown-alert-title {
	color: var(--vscode-testing-iconPassed);
}

.markdown-alert.markdown-alert-important {
	border-left: .25em solid var(--vscode-statusBar-debuggingBackground);
}

.markdown-alert.markdown-alert-important .markdown-alert-title {
	color: var(--vscode-statusBar-debuggingBackground);
}

.markdown-alert.markdown-alert-caution {
	border-left: .25em solid var(--vscode-editorError-foreground);
}

.markdown-alert.markdown-alert-caution .markdown-alert-title {
	color: var(--vscode-editorError-foreground);
}

.markdown-alert {
	padding: .5rem .5rem;
	margin-bottom: 1rem;
	color: inherit;
}

.markdown-alert .markdown-alert-title {
	display: flex;
	align-items: center;
	line-height: 1;
}

.markdown-alert-title svg {
	padding-right: 3px;
}

.markdown-alert>:first-child {
	margin-top: 0;
}

svg.octicon path {
	display: inline-block;
	overflow: visible !important;
	vertical-align: text-bottom;
	fill: currentColor;
}

.collapsible-sidebar {
	border-top: 1px solid var(--vscode-editorWidget-border);
	border-bottom: 1px solid var(--vscode-editorWidget-border);
	margin-bottom: 24px;
}

.collapsible-sidebar-header {
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 16px 0px 8px;
	user-select: none;
	outline: none;
}

.collapsible-sidebar-header.expanded {
	padding: 8px 0px;
}

.collapsible-sidebar-header:focus {
	outline: 1px solid var(--vscode-focusBorder);
}

.collapsible-sidebar-title {
	font-size: 13px;
	width: 100%;
}

.collapsible-sidebar-content {
	padding-bottom: 16px;
}

.collapsed-label {
	gap: 8px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 8px 20px;
}

.collapsed-section {
	gap: 8px;
	display: inline-flex;
	align-items: center;
	min-width: 0;
	overflow: hidden;
	height: 22px;
}

.collapsed-section-label {
	padding-right: 4px;
	font-weight: 600;
	flex-shrink: 0;
}

.collapsed-section-count {
	color: var(--vscode-descriptionForeground);
}

.pill-container {
	display: flex;
	align-items: center;
	min-width: 0;
	flex: 1;
	flex-wrap: nowrap;
	overflow: hidden;
}

.pill-item {
	flex-shrink: 0;
	white-space: nowrap;
	border-radius: 20px;
	margin-right: 2px;
	border-style: none;
	text-overflow: ellipsis;
	max-width: -webkit-fill-available;
	overflow: hidden;
	display: inline-block;
}

.pill-overflow {
	color: var(--vscode-descriptionForeground);
	font-size: 13px;
	margin-left: 4px;
	flex-shrink: 0;
	white-space: nowrap;
}

.collapsed-section .stacked-avatar {
	position: absolute;
}

.avatar-stack {
	position: relative;
	height: 22px;
}

.collapsible-label-see-more {
	padding-bottom: 16px;
	display: block;
	font-size: 13px;
	cursor: pointer;
}`,""]);const D=h},6314:_=>{"use strict";_.exports=function(k){var U=[];return U.toString=i(function(){return this.map(function(V){var T="",v=typeof V[5]!="undefined";return V[4]&&(T+="@supports (".concat(V[4],") {")),V[2]&&(T+="@media ".concat(V[2]," {")),v&&(T+="@layer".concat(V[5].length>0?" ".concat(V[5]):""," {")),T+=k(V),v&&(T+="}"),V[2]&&(T+="}"),V[4]&&(T+="}"),T}).join("")},"toString"),U.i=i(function(V,T,v,h,D){typeof V=="string"&&(V=[[null,V,void 0]]);var A={};if(v)for(var B=0;B<this.length;B++){var H=this[B][0];H!=null&&(A[H]=!0)}for(var X=0;X<V.length;X++){var Y=[].concat(V[X]);v&&A[Y[0]]||(typeof D!="undefined"&&(typeof Y[5]=="undefined"||(Y[1]="@layer".concat(Y[5].length>0?" ".concat(Y[5]):""," {").concat(Y[1],"}")),Y[5]=D),T&&(Y[2]&&(Y[1]="@media ".concat(Y[2]," {").concat(Y[1],"}")),Y[2]=T),h&&(Y[4]?(Y[1]="@supports (".concat(Y[4],") {").concat(Y[1],"}"),Y[4]=h):Y[4]="".concat(h)),U.push(Y))}},"i"),U}},1601:_=>{"use strict";_.exports=function(k){return k[1]}},4353:function(_){(function(k,U){_.exports=U()})(this,function(){"use strict";var k="millisecond",U="second",K="minute",V="hour",T="day",v="week",h="month",D="quarter",A="year",B="date",H=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,X=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},Pe=i(function(q,O,F){var ie=String(q);return!ie||ie.length>=O?q:""+Array(O+1-ie.length).join(F)+q},"$"),Ie={s:Pe,z:i(function(q){var O=-q.utcOffset(),F=Math.abs(O),ie=Math.floor(F/60),G=F%60;return(O<=0?"+":"-")+Pe(ie,2,"0")+":"+Pe(G,2,"0")},"z"),m:i(function q(O,F){if(O.date()<F.date())return-q(F,O);var ie=12*(F.year()-O.year())+(F.month()-O.month()),G=O.clone().add(ie,h),ae=F-G<0,ce=O.clone().add(ie+(ae?-1:1),h);return+(-(ie+(F-G)/(ae?G-ce:ce-G))||0)},"t"),a:i(function(q){return q<0?Math.ceil(q)||0:Math.floor(q)},"a"),p:i(function(q){return{M:h,y:A,w:v,d:T,D:B,h:V,m:K,s:U,ms:k,Q:D}[q]||String(q||"").toLowerCase().replace(/s$/,"")},"p"),u:i(function(q){return q===void 0},"u")},fe="en",Oe={};Oe[fe]=Y;var lt=i(function(q){return q instanceof oe},"m"),W=i(function(q,O,F){var ie;if(!q)return fe;if(typeof q=="string")Oe[q]&&(ie=q),O&&(Oe[q]=O,ie=q);else{var G=q.name;Oe[G]=q,ie=G}return!F&&ie&&(fe=ie),ie||!F&&fe},"D"),R=i(function(q,O){if(lt(q))return q.clone();var F=typeof O=="object"?O:{};return F.date=q,F.args=arguments,new oe(F)},"v"),l=Ie;l.l=W,l.i=lt,l.w=function(q,O){return R(q,{locale:O.$L,utc:O.$u,x:O.$x,$offset:O.$offset})};var oe=function(){function q(F){this.$L=W(F.locale,null,!0),this.parse(F)}i(q,"d");var O=q.prototype;return O.parse=function(F){this.$d=function(ie){var G=ie.date,ae=ie.utc;if(G===null)return new Date(NaN);if(l.u(G))return new Date;if(G instanceof Date)return new Date(G);if(typeof G=="string"&&!/Z$/i.test(G)){var ce=G.match(H);if(ce){var he=ce[2]-1||0,ve=(ce[7]||"0").substring(0,3);return ae?new Date(Date.UTC(ce[1],he,ce[3]||1,ce[4]||0,ce[5]||0,ce[6]||0,ve)):new Date(ce[1],he,ce[3]||1,ce[4]||0,ce[5]||0,ce[6]||0,ve)}}return new Date(G)}(F),this.$x=F.x||{},this.init()},O.init=function(){var F=this.$d;this.$y=F.getFullYear(),this.$M=F.getMonth(),this.$D=F.getDate(),this.$W=F.getDay(),this.$H=F.getHours(),this.$m=F.getMinutes(),this.$s=F.getSeconds(),this.$ms=F.getMilliseconds()},O.$utils=function(){return l},O.isValid=function(){return this.$d.toString()!=="Invalid Date"},O.isSame=function(F,ie){var G=R(F);return this.startOf(ie)<=G&&G<=this.endOf(ie)},O.isAfter=function(F,ie){return R(F)<this.startOf(ie)},O.isBefore=function(F,ie){return this.endOf(ie)<R(F)},O.$g=function(F,ie,G){return l.u(F)?this[ie]:this.set(G,F)},O.unix=function(){return Math.floor(this.valueOf()/1e3)},O.valueOf=function(){return this.$d.getTime()},O.startOf=function(F,ie){var G=this,ae=!!l.u(ie)||ie,ce=l.p(F),he=i(function(dt,je){var j=l.w(G.$u?Date.UTC(G.$y,je,dt):new Date(G.$y,je,dt),G);return ae?j:j.endOf(T)},"$"),ve=i(function(dt,je){return l.w(G.toDate()[dt].apply(G.toDate("s"),(ae?[0,0,0,0]:[23,59,59,999]).slice(je)),G)},"l"),De=this.$W,He=this.$M,Xe=this.$D,Je="set"+(this.$u?"UTC":"");switch(ce){case A:return ae?he(1,0):he(31,11);case h:return ae?he(1,He):he(0,He+1);case v:var ct=this.$locale().weekStart||0,Et=(De<ct?De+7:De)-ct;return he(ae?Xe-Et:Xe+(6-Et),He);case T:case B:return ve(Je+"Hours",0);case V:return ve(Je+"Minutes",1);case K:return ve(Je+"Seconds",2);case U:return ve(Je+"Milliseconds",3);default:return this.clone()}},O.endOf=function(F){return this.startOf(F,!1)},O.$set=function(F,ie){var G,ae=l.p(F),ce="set"+(this.$u?"UTC":""),he=(G={},G[T]=ce+"Date",G[B]=ce+"Date",G[h]=ce+"Month",G[A]=ce+"FullYear",G[V]=ce+"Hours",G[K]=ce+"Minutes",G[U]=ce+"Seconds",G[k]=ce+"Milliseconds",G)[ae],ve=ae===T?this.$D+(ie-this.$W):ie;if(ae===h||ae===A){var De=this.clone().set(B,1);De.$d[he](ve),De.init(),this.$d=De.set(B,Math.min(this.$D,De.daysInMonth())).$d}else he&&this.$d[he](ve);return this.init(),this},O.set=function(F,ie){return this.clone().$set(F,ie)},O.get=function(F){return this[l.p(F)]()},O.add=function(F,ie){var G,ae=this;F=Number(F);var ce=l.p(ie),he=i(function(He){var Xe=R(ae);return l.w(Xe.date(Xe.date()+Math.round(He*F)),ae)},"d");if(ce===h)return this.set(h,this.$M+F);if(ce===A)return this.set(A,this.$y+F);if(ce===T)return he(1);if(ce===v)return he(7);var ve=(G={},G[K]=6e4,G[V]=36e5,G[U]=1e3,G)[ce]||1,De=this.$d.getTime()+F*ve;return l.w(De,this)},O.subtract=function(F,ie){return this.add(-1*F,ie)},O.format=function(F){var ie=this;if(!this.isValid())return"Invalid Date";var G=F||"YYYY-MM-DDTHH:mm:ssZ",ae=l.z(this),ce=this.$locale(),he=this.$H,ve=this.$m,De=this.$M,He=ce.weekdays,Xe=ce.months,Je=i(function(je,j,ne,xe){return je&&(je[j]||je(ie,G))||ne[j].substr(0,xe)},"h"),ct=i(function(je){return l.s(he%12||12,je,"0")},"d"),Et=ce.meridiem||function(je,j,ne){var xe=je<12?"AM":"PM";return ne?xe.toLowerCase():xe},dt={YY:String(this.$y).slice(-2),YYYY:this.$y,M:De+1,MM:l.s(De+1,2,"0"),MMM:Je(ce.monthsShort,De,Xe,3),MMMM:Je(Xe,De),D:this.$D,DD:l.s(this.$D,2,"0"),d:String(this.$W),dd:Je(ce.weekdaysMin,this.$W,He,2),ddd:Je(ce.weekdaysShort,this.$W,He,3),dddd:He[this.$W],H:String(he),HH:l.s(he,2,"0"),h:ct(1),hh:ct(2),a:Et(he,ve,!0),A:Et(he,ve,!1),m:String(ve),mm:l.s(ve,2,"0"),s:String(this.$s),ss:l.s(this.$s,2,"0"),SSS:l.s(this.$ms,3,"0"),Z:ae};return G.replace(X,function(je,j){return j||dt[je]||ae.replace(":","")})},O.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},O.diff=function(F,ie,G){var ae,ce=l.p(ie),he=R(F),ve=6e4*(he.utcOffset()-this.utcOffset()),De=this-he,He=l.m(this,he);return He=(ae={},ae[A]=He/12,ae[h]=He,ae[D]=He/3,ae[v]=(De-ve)/6048e5,ae[T]=(De-ve)/864e5,ae[V]=De/36e5,ae[K]=De/6e4,ae[U]=De/1e3,ae)[ce]||De,G?He:l.a(He)},O.daysInMonth=function(){return this.endOf(h).$D},O.$locale=function(){return Oe[this.$L]},O.locale=function(F,ie){if(!F)return this.$L;var G=this.clone(),ae=W(F,ie,!0);return ae&&(G.$L=ae),G},O.clone=function(){return l.w(this.$d,this)},O.toDate=function(){return new Date(this.valueOf())},O.toJSON=function(){return this.isValid()?this.toISOString():null},O.toISOString=function(){return this.$d.toISOString()},O.toString=function(){return this.$d.toUTCString()},q}(),I=oe.prototype;return R.prototype=I,[["$ms",k],["$s",U],["$m",K],["$H",V],["$W",T],["$M",h],["$y",A],["$D",B]].forEach(function(q){I[q[1]]=function(O){return this.$g(O,q[0],q[1])}}),R.extend=function(q,O){return q.$i||(q(O,oe,R),q.$i=!0),R},R.locale=W,R.isDayjs=lt,R.unix=function(q){return R(1e3*q)},R.en=Oe[fe],R.Ls=Oe,R.p={},R})},6279:function(_){(function(k,U){_.exports=U()})(this,function(){"use strict";return function(k,U,K){k=k||{};var V=U.prototype,T={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function v(D,A,B,H){return V.fromToBase(D,A,B,H)}i(v,"i"),K.en.relativeTime=T,V.fromToBase=function(D,A,B,H,X){for(var Y,Pe,Ie,fe=B.$locale().relativeTime||T,Oe=k.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],lt=Oe.length,W=0;W<lt;W+=1){var R=Oe[W];R.d&&(Y=H?K(D).diff(B,R.d,!0):B.diff(D,R.d,!0));var l=(k.rounding||Math.round)(Math.abs(Y));if(Ie=Y>0,l<=R.r||!R.r){l<=1&&W>0&&(R=Oe[W-1]);var oe=fe[R.l];X&&(l=X(""+l)),Pe=typeof oe=="string"?oe.replace("%d",l):oe(l,A,R.l,Ie);break}}if(A)return Pe;var I=Ie?fe.future:fe.past;return typeof I=="function"?I(Pe):I.replace("%s",Pe)},V.to=function(D,A){return v(D,A,this,!0)},V.from=function(D,A){return v(D,A,this)};var h=i(function(D){return D.$u?K.utc():K()},"d");V.toNow=function(D){return this.to(h(this),D)},V.fromNow=function(D){return this.from(h(this),D)}}})},3581:function(_){(function(k,U){_.exports=U()})(this,function(){"use strict";return function(k,U,K){K.updateLocale=function(V,T){var v=K.Ls[V];if(v)return(T?Object.keys(T):[]).forEach(function(h){v[h]=T[h]}),v}}})},7334:_=>{function k(U,K,V){var T,v,h,D,A;K==null&&(K=100);function B(){var X=Date.now()-D;X<K&&X>=0?T=setTimeout(B,K-X):(T=null,V||(A=U.apply(h,v),h=v=null))}i(B,"later");var H=i(function(){h=this,v=arguments,D=Date.now();var X=V&&!T;return T||(T=setTimeout(B,K)),X&&(A=U.apply(h,v),h=v=null),A},"debounced");return H.clear=function(){T&&(clearTimeout(T),T=null)},H.flush=function(){T&&(A=U.apply(h,v),h=v=null,clearTimeout(T),T=null)},H}i(k,"debounce"),k.debounce=k,_.exports=k},7007:_=>{"use strict";var k=typeof Reflect=="object"?Reflect:null,U=k&&typeof k.apply=="function"?k.apply:i(function(R,l,oe){return Function.prototype.apply.call(R,l,oe)},"ReflectApply"),K;k&&typeof k.ownKeys=="function"?K=k.ownKeys:Object.getOwnPropertySymbols?K=i(function(R){return Object.getOwnPropertyNames(R).concat(Object.getOwnPropertySymbols(R))},"ReflectOwnKeys"):K=i(function(R){return Object.getOwnPropertyNames(R)},"ReflectOwnKeys");function V(W){console&&console.warn&&console.warn(W)}i(V,"ProcessEmitWarning");var T=Number.isNaN||i(function(R){return R!==R},"NumberIsNaN");function v(){v.init.call(this)}i(v,"EventEmitter"),_.exports=v,_.exports.once=lt,v.EventEmitter=v,v.prototype._events=void 0,v.prototype._eventsCount=0,v.prototype._maxListeners=void 0;var h=10;function D(W){if(typeof W!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof W)}i(D,"checkListener"),Object.defineProperty(v,"defaultMaxListeners",{enumerable:!0,get:i(function(){return h},"get"),set:i(function(W){if(typeof W!="number"||W<0||T(W))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+W+".");h=W},"set")}),v.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},v.prototype.setMaxListeners=i(function(R){if(typeof R!="number"||R<0||T(R))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+R+".");return this._maxListeners=R,this},"setMaxListeners");function A(W){return W._maxListeners===void 0?v.defaultMaxListeners:W._maxListeners}i(A,"_getMaxListeners"),v.prototype.getMaxListeners=i(function(){return A(this)},"getMaxListeners"),v.prototype.emit=i(function(R){for(var l=[],oe=1;oe<arguments.length;oe++)l.push(arguments[oe]);var I=R==="error",q=this._events;if(q!==void 0)I=I&&q.error===void 0;else if(!I)return!1;if(I){var O;if(l.length>0&&(O=l[0]),O instanceof Error)throw O;var F=new Error("Unhandled error."+(O?" ("+O.message+")":""));throw F.context=O,F}var ie=q[R];if(ie===void 0)return!1;if(typeof ie=="function")U(ie,this,l);else for(var G=ie.length,ae=Ie(ie,G),oe=0;oe<G;++oe)U(ae[oe],this,l);return!0},"emit");function B(W,R,l,oe){var I,q,O;if(D(l),q=W._events,q===void 0?(q=W._events=Object.create(null),W._eventsCount=0):(q.newListener!==void 0&&(W.emit("newListener",R,l.listener?l.listener:l),q=W._events),O=q[R]),O===void 0)O=q[R]=l,++W._eventsCount;else if(typeof O=="function"?O=q[R]=oe?[l,O]:[O,l]:oe?O.unshift(l):O.push(l),I=A(W),I>0&&O.length>I&&!O.warned){O.warned=!0;var F=new Error("Possible EventEmitter memory leak detected. "+O.length+" "+String(R)+" listeners added. Use emitter.setMaxListeners() to increase limit");F.name="MaxListenersExceededWarning",F.emitter=W,F.type=R,F.count=O.length,V(F)}return W}i(B,"_addListener"),v.prototype.addListener=i(function(R,l){return B(this,R,l,!1)},"addListener"),v.prototype.on=v.prototype.addListener,v.prototype.prependListener=i(function(R,l){return B(this,R,l,!0)},"prependListener");function H(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}i(H,"onceWrapper");function X(W,R,l){var oe={fired:!1,wrapFn:void 0,target:W,type:R,listener:l},I=H.bind(oe);return I.listener=l,oe.wrapFn=I,I}i(X,"_onceWrap"),v.prototype.once=i(function(R,l){return D(l),this.on(R,X(this,R,l)),this},"once"),v.prototype.prependOnceListener=i(function(R,l){return D(l),this.prependListener(R,X(this,R,l)),this},"prependOnceListener"),v.prototype.removeListener=i(function(R,l){var oe,I,q,O,F;if(D(l),I=this._events,I===void 0)return this;if(oe=I[R],oe===void 0)return this;if(oe===l||oe.listener===l)--this._eventsCount===0?this._events=Object.create(null):(delete I[R],I.removeListener&&this.emit("removeListener",R,oe.listener||l));else if(typeof oe!="function"){for(q=-1,O=oe.length-1;O>=0;O--)if(oe[O]===l||oe[O].listener===l){F=oe[O].listener,q=O;break}if(q<0)return this;q===0?oe.shift():fe(oe,q),oe.length===1&&(I[R]=oe[0]),I.removeListener!==void 0&&this.emit("removeListener",R,F||l)}return this},"removeListener"),v.prototype.off=v.prototype.removeListener,v.prototype.removeAllListeners=i(function(R){var l,oe,I;if(oe=this._events,oe===void 0)return this;if(oe.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):oe[R]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete oe[R]),this;if(arguments.length===0){var q=Object.keys(oe),O;for(I=0;I<q.length;++I)O=q[I],O!=="removeListener"&&this.removeAllListeners(O);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(l=oe[R],typeof l=="function")this.removeListener(R,l);else if(l!==void 0)for(I=l.length-1;I>=0;I--)this.removeListener(R,l[I]);return this},"removeAllListeners");function Y(W,R,l){var oe=W._events;if(oe===void 0)return[];var I=oe[R];return I===void 0?[]:typeof I=="function"?l?[I.listener||I]:[I]:l?Oe(I):Ie(I,I.length)}i(Y,"_listeners"),v.prototype.listeners=i(function(R){return Y(this,R,!0)},"listeners"),v.prototype.rawListeners=i(function(R){return Y(this,R,!1)},"rawListeners"),v.listenerCount=function(W,R){return typeof W.listenerCount=="function"?W.listenerCount(R):Pe.call(W,R)},v.prototype.listenerCount=Pe;function Pe(W){var R=this._events;if(R!==void 0){var l=R[W];if(typeof l=="function")return 1;if(l!==void 0)return l.length}return 0}i(Pe,"listenerCount"),v.prototype.eventNames=i(function(){return this._eventsCount>0?K(this._events):[]},"eventNames");function Ie(W,R){for(var l=new Array(R),oe=0;oe<R;++oe)l[oe]=W[oe];return l}i(Ie,"arrayClone");function fe(W,R){for(;R+1<W.length;R++)W[R]=W[R+1];W.pop()}i(fe,"spliceOne");function Oe(W){for(var R=new Array(W.length),l=0;l<R.length;++l)R[l]=W[l].listener||W[l];return R}i(Oe,"unwrapListeners");function lt(W,R){return new Promise(function(l,oe){function I(){q!==void 0&&W.removeListener("error",q),l([].slice.call(arguments))}i(I,"eventListener");var q;R!=="error"&&(q=i(function(F){W.removeListener(R,I),oe(F)},"errorListener"),W.once("error",q)),W.once(R,I)})}i(lt,"once")},5228:_=>{"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var k=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;function V(v){if(v==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(v)}i(V,"toObject");function T(){try{if(!Object.assign)return!1;var v=new String("abc");if(v[5]="de",Object.getOwnPropertyNames(v)[0]==="5")return!1;for(var h={},D=0;D<10;D++)h["_"+String.fromCharCode(D)]=D;var A=Object.getOwnPropertyNames(h).map(function(H){return h[H]});if(A.join("")!=="0123456789")return!1;var B={};return"abcdefghijklmnopqrst".split("").forEach(function(H){B[H]=H}),Object.keys(Object.assign({},B)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}i(T,"shouldUseNative"),_.exports=T()?Object.assign:function(v,h){for(var D,A=V(v),B,H=1;H<arguments.length;H++){D=Object(arguments[H]);for(var X in D)U.call(D,X)&&(A[X]=D[X]);if(k){B=k(D);for(var Y=0;Y<B.length;Y++)K.call(D,B[Y])&&(A[B[Y]]=D[B[Y]])}}return A}},7975:_=>{"use strict";function k(T){if(typeof T!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(T))}i(k,"assertPath");function U(T,v){for(var h="",D=0,A=-1,B=0,H,X=0;X<=T.length;++X){if(X<T.length)H=T.charCodeAt(X);else{if(H===47)break;H=47}if(H===47){if(!(A===X-1||B===1))if(A!==X-1&&B===2){if(h.length<2||D!==2||h.charCodeAt(h.length-1)!==46||h.charCodeAt(h.length-2)!==46){if(h.length>2){var Y=h.lastIndexOf("/");if(Y!==h.length-1){Y===-1?(h="",D=0):(h=h.slice(0,Y),D=h.length-1-h.lastIndexOf("/")),A=X,B=0;continue}}else if(h.length===2||h.length===1){h="",D=0,A=X,B=0;continue}}v&&(h.length>0?h+="/..":h="..",D=2)}else h.length>0?h+="/"+T.slice(A+1,X):h=T.slice(A+1,X),D=X-A-1;A=X,B=0}else H===46&&B!==-1?++B:B=-1}return h}i(U,"normalizeStringPosix");function K(T,v){var h=v.dir||v.root,D=v.base||(v.name||"")+(v.ext||"");return h?h===v.root?h+D:h+T+D:D}i(K,"_format");var V={resolve:i(function(){for(var v="",h=!1,D,A=arguments.length-1;A>=-1&&!h;A--){var B;A>=0?B=arguments[A]:(D===void 0&&(D=process.cwd()),B=D),k(B),B.length!==0&&(v=B+"/"+v,h=B.charCodeAt(0)===47)}return v=U(v,!h),h?v.length>0?"/"+v:"/":v.length>0?v:"."},"resolve"),normalize:i(function(v){if(k(v),v.length===0)return".";var h=v.charCodeAt(0)===47,D=v.charCodeAt(v.length-1)===47;return v=U(v,!h),v.length===0&&!h&&(v="."),v.length>0&&D&&(v+="/"),h?"/"+v:v},"normalize"),isAbsolute:i(function(v){return k(v),v.length>0&&v.charCodeAt(0)===47},"isAbsolute"),join:i(function(){if(arguments.length===0)return".";for(var v,h=0;h<arguments.length;++h){var D=arguments[h];k(D),D.length>0&&(v===void 0?v=D:v+="/"+D)}return v===void 0?".":V.normalize(v)},"join"),relative:i(function(v,h){if(k(v),k(h),v===h||(v=V.resolve(v),h=V.resolve(h),v===h))return"";for(var D=1;D<v.length&&v.charCodeAt(D)===47;++D);for(var A=v.length,B=A-D,H=1;H<h.length&&h.charCodeAt(H)===47;++H);for(var X=h.length,Y=X-H,Pe=B<Y?B:Y,Ie=-1,fe=0;fe<=Pe;++fe){if(fe===Pe){if(Y>Pe){if(h.charCodeAt(H+fe)===47)return h.slice(H+fe+1);if(fe===0)return h.slice(H+fe)}else B>Pe&&(v.charCodeAt(D+fe)===47?Ie=fe:fe===0&&(Ie=0));break}var Oe=v.charCodeAt(D+fe),lt=h.charCodeAt(H+fe);if(Oe!==lt)break;Oe===47&&(Ie=fe)}var W="";for(fe=D+Ie+1;fe<=A;++fe)(fe===A||v.charCodeAt(fe)===47)&&(W.length===0?W+="..":W+="/..");return W.length>0?W+h.slice(H+Ie):(H+=Ie,h.charCodeAt(H)===47&&++H,h.slice(H))},"relative"),_makeLong:i(function(v){return v},"_makeLong"),dirname:i(function(v){if(k(v),v.length===0)return".";for(var h=v.charCodeAt(0),D=h===47,A=-1,B=!0,H=v.length-1;H>=1;--H)if(h=v.charCodeAt(H),h===47){if(!B){A=H;break}}else B=!1;return A===-1?D?"/":".":D&&A===1?"//":v.slice(0,A)},"dirname"),basename:i(function(v,h){if(h!==void 0&&typeof h!="string")throw new TypeError('"ext" argument must be a string');k(v);var D=0,A=-1,B=!0,H;if(h!==void 0&&h.length>0&&h.length<=v.length){if(h.length===v.length&&h===v)return"";var X=h.length-1,Y=-1;for(H=v.length-1;H>=0;--H){var Pe=v.charCodeAt(H);if(Pe===47){if(!B){D=H+1;break}}else Y===-1&&(B=!1,Y=H+1),X>=0&&(Pe===h.charCodeAt(X)?--X===-1&&(A=H):(X=-1,A=Y))}return D===A?A=Y:A===-1&&(A=v.length),v.slice(D,A)}else{for(H=v.length-1;H>=0;--H)if(v.charCodeAt(H)===47){if(!B){D=H+1;break}}else A===-1&&(B=!1,A=H+1);return A===-1?"":v.slice(D,A)}},"basename"),extname:i(function(v){k(v);for(var h=-1,D=0,A=-1,B=!0,H=0,X=v.length-1;X>=0;--X){var Y=v.charCodeAt(X);if(Y===47){if(!B){D=X+1;break}continue}A===-1&&(B=!1,A=X+1),Y===46?h===-1?h=X:H!==1&&(H=1):h!==-1&&(H=-1)}return h===-1||A===-1||H===0||H===1&&h===A-1&&h===D+1?"":v.slice(h,A)},"extname"),format:i(function(v){if(v===null||typeof v!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof v);return K("/",v)},"format"),parse:i(function(v){k(v);var h={root:"",dir:"",base:"",ext:"",name:""};if(v.length===0)return h;var D=v.charCodeAt(0),A=D===47,B;A?(h.root="/",B=1):B=0;for(var H=-1,X=0,Y=-1,Pe=!0,Ie=v.length-1,fe=0;Ie>=B;--Ie){if(D=v.charCodeAt(Ie),D===47){if(!Pe){X=Ie+1;break}continue}Y===-1&&(Pe=!1,Y=Ie+1),D===46?H===-1?H=Ie:fe!==1&&(fe=1):H!==-1&&(fe=-1)}return H===-1||Y===-1||fe===0||fe===1&&H===Y-1&&H===X+1?Y!==-1&&(X===0&&A?h.base=h.name=v.slice(1,Y):h.base=h.name=v.slice(X,Y)):(X===0&&A?(h.name=v.slice(1,H),h.base=v.slice(1,Y)):(h.name=v.slice(X,H),h.base=v.slice(X,Y)),h.ext=v.slice(H,Y)),X>0?h.dir=v.slice(0,X-1):A&&(h.dir="/"),h},"parse"),sep:"/",delimiter:":",win32:null,posix:null};V.posix=V,_.exports=V},2551:(_,k,U)=>{"use strict";var K;/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V=U(6540),T=U(5228),v=U(9982);function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(i(h,"u"),!V)throw Error(h(227));function D(e,t,n,o,s,f,m,g,S){var M=Array.prototype.slice.call(arguments,3);try{t.apply(n,M)}catch(re){this.onError(re)}}i(D,"ba");var A=!1,B=null,H=!1,X=null,Y={onError:i(function(e){A=!0,B=e},"onError")};function Pe(e,t,n,o,s,f,m,g,S){A=!1,B=null,D.apply(Y,arguments)}i(Pe,"ja");function Ie(e,t,n,o,s,f,m,g,S){if(Pe.apply(this,arguments),A){if(A){var M=B;A=!1,B=null}else throw Error(h(198));H||(H=!0,X=M)}}i(Ie,"ka");var fe=null,Oe=null,lt=null;function W(e,t,n){var o=e.type||"unknown-event";e.currentTarget=lt(n),Ie(o,t,void 0,e),e.currentTarget=null}i(W,"oa");var R=null,l={};function oe(){if(R)for(var e in l){var t=l[e],n=R.indexOf(e);if(!(-1<n))throw Error(h(96,e));if(!q[n]){if(!t.extractEvents)throw Error(h(97,e));q[n]=t,n=t.eventTypes;for(var o in n){var s=void 0,f=n[o],m=t,g=o;if(O.hasOwnProperty(g))throw Error(h(99,g));O[g]=f;var S=f.phasedRegistrationNames;if(S){for(s in S)S.hasOwnProperty(s)&&I(S[s],m,g);s=!0}else f.registrationName?(I(f.registrationName,m,g),s=!0):s=!1;if(!s)throw Error(h(98,o,e))}}}}i(oe,"ra");function I(e,t,n){if(F[e])throw Error(h(100,e));F[e]=t,ie[e]=t.eventTypes[n].dependencies}i(I,"ua");var q=[],O={},F={},ie={};function G(e){var t=!1,n;for(n in e)if(e.hasOwnProperty(n)){var o=e[n];if(!l.hasOwnProperty(n)||l[n]!==o){if(l[n])throw Error(h(102,n));l[n]=o,t=!0}}t&&oe()}i(G,"xa");var ae=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),ce=null,he=null,ve=null;function De(e){if(e=Oe(e)){if(typeof ce!="function")throw Error(h(280));var t=e.stateNode;t&&(t=fe(t),ce(e.stateNode,e.type,t))}}i(De,"Ca");function He(e){he?ve?ve.push(e):ve=[e]:he=e}i(He,"Da");function Xe(){if(he){var e=he,t=ve;if(ve=he=null,De(e),t)for(e=0;e<t.length;e++)De(t[e])}}i(Xe,"Ea");function Je(e,t){return e(t)}i(Je,"Fa");function ct(e,t,n,o,s){return e(t,n,o,s)}i(ct,"Ga");function Et(){}i(Et,"Ha");var dt=Je,je=!1,j=!1;function ne(){(he!==null||ve!==null)&&(Et(),Xe())}i(ne,"La");function xe(e,t,n){if(j)return e(t,n);j=!0;try{return dt(e,t,n)}finally{j=!1,ne()}}i(xe,"Ma");var w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P=Object.prototype.hasOwnProperty,pe={},Me={};function ke(e){return P.call(Me,e)?!0:P.call(pe,e)?!1:w.test(e)?Me[e]=!0:(pe[e]=!0,!1)}i(ke,"Ra");function Be(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}i(Be,"Sa");function gt(e,t,n,o){if(t===null||typeof t=="undefined"||Be(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}i(gt,"Ta");function Te(e,t,n,o,s,f){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=f}i(Te,"v");var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Te(e,0,!1,e,null,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Te(t,1,!1,e[1],null,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Te(e,2,!1,e.toLowerCase(),null,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Te(e,2,!1,e,null,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Te(e,3,!1,e.toLowerCase(),null,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Te(e,3,!0,e,null,!1)}),["capture","download"].forEach(function(e){Fe[e]=new Te(e,4,!1,e,null,!1)}),["cols","rows","size","span"].forEach(function(e){Fe[e]=new Te(e,6,!1,e,null,!1)}),["rowSpan","start"].forEach(function(e){Fe[e]=new Te(e,5,!1,e.toLowerCase(),null,!1)});var Lt=/[\-:]([a-z])/g;function gi(e){return e[1].toUpperCase()}i(gi,"Va"),"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Lt,gi);Fe[t]=new Te(t,1,!1,e,null,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Lt,gi);Fe[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Lt,gi);Fe[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)}),["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Te(e,1,!1,e.toLowerCase(),null,!1)}),Fe.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach(function(e){Fe[e]=new Te(e,1,!1,e.toLowerCase(),null,!0)});var Ot=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Ot.hasOwnProperty("ReactCurrentDispatcher")||(Ot.ReactCurrentDispatcher={current:null}),Ot.hasOwnProperty("ReactCurrentBatchConfig")||(Ot.ReactCurrentBatchConfig={suspense:null});function ho(e,t,n,o){var s=Fe.hasOwnProperty(t)?Fe[t]:null,f=s!==null?s.type===0:o?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");f||(gt(t,n,s,o)&&(n=null),o||s===null?ke(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,o=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}i(ho,"Xa");var jl=/^(.*)[\\\/]/,vt=typeof Symbol=="function"&&Symbol.for,go=vt?Symbol.for("react.element"):60103,Mn=vt?Symbol.for("react.portal"):60106,hn=vt?Symbol.for("react.fragment"):60107,vi=vt?Symbol.for("react.strict_mode"):60108,Rr=vt?Symbol.for("react.profiler"):60114,Ci=vt?Symbol.for("react.provider"):60109,Pr=vt?Symbol.for("react.context"):60110,at=vt?Symbol.for("react.concurrent_mode"):60111,vo=vt?Symbol.for("react.forward_ref"):60112,Co=vt?Symbol.for("react.suspense"):60113,yo=vt?Symbol.for("react.suspense_list"):60120,Tn=vt?Symbol.for("react.memo"):60115,yi=vt?Symbol.for("react.lazy"):60116,wi=vt?Symbol.for("react.block"):60121,xi=typeof Symbol=="function"&&Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=xi&&e[xi]||e["@@iterator"],typeof e=="function"?e:null)}i(er,"nb");function Ul(e){if(e._status===-1){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}}i(Ul,"ob");function Zt(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hn:return"Fragment";case Mn:return"Portal";case Rr:return"Profiler";case vi:return"StrictMode";case Co:return"Suspense";case yo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pr:return"Context.Consumer";case Ci:return"Context.Provider";case vo:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case Tn:return Zt(e.type);case wi:return Zt(e.render);case yi:if(e=e._status===1?e._result:null)return Zt(e)}return null}i(Zt,"pb");function Or(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var o=e._debugOwner,s=e._debugSource,f=Zt(e.type);n=null,o&&(n=Zt(o.type)),o=f,f="",s?f=" (at "+s.fileName.replace(jl,"")+":"+s.lineNumber+")":n&&(f=" (created by "+n+")"),n=`
    in `+(o||"Unknown")+f}t+=n,e=e.return}while(e);return t}i(Or,"qb");function Gt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}i(Gt,"rb");function Wl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}i(Wl,"sb");function Ei(e){var t=Wl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,f=n.set;return Object.defineProperty(e,t,{configurable:!0,get:i(function(){return s.call(this)},"get"),set:i(function(m){o=""+m,f.call(this,m)},"set")}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:i(function(){return o},"getValue"),setValue:i(function(m){o=""+m},"setValue"),stopTracking:i(function(){e._valueTracker=null,delete e[t]},"stopTracking")}}}i(Ei,"tb");function wo(e){e._valueTracker||(e._valueTracker=Ei(e))}i(wo,"xb");function xo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Wl(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}i(xo,"yb");function Eo(e,t){var n=t.checked;return T({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}i(Eo,"zb");function bi(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}i(bi,"Ab");function et(e,t){t=t.checked,t!=null&&ho(e,"checked",t,!1)}i(et,"Bb");function ki(e,t){et(e,t);var n=Gt(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_i(e,t.type,n):t.hasOwnProperty("defaultValue")&&_i(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}i(ki,"Cb");function Zl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}i(Zl,"Eb");function _i(e,t,n){(t!=="number"||e.ownerDocument.activeElement!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}i(_i,"Db");function va(e){var t="";return V.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}i(va,"Fb");function bo(e,t){return e=T({children:void 0},t),(t=va(t.children))&&(e.children=t),e}i(bo,"Gb");function tr(e,t,n,o){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}i(tr,"Hb");function Dr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return T({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}i(Dr,"Ib");function Ar(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}i(Ar,"Jb");function Si(e,t){var n=Gt(t.value),o=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}i(Si,"Kb");function Mi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}i(Mi,"Lb");var ql={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Ql(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}i(Ql,"Nb");function Ti(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ql(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}i(Ti,"Ob");var gn,vn=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,o,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,s)})}:e}(function(e,t){if(e.namespaceURI!==ql.svg||"innerHTML"in e)e.innerHTML=t;else{for(gn=gn||document.createElement("div"),gn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ln(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}i(Ln,"Rb");function nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}i(nr,"Sb");var Nn={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionend:nr("Transition","TransitionEnd")},Ir={},Li={};ae&&(Li=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function Hr(e){if(Ir[e])return Ir[e];if(!Nn[e])return e;var t=Nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Li)return Ir[e]=t[n];return e}i(Hr,"Wb");var ko=Hr("animationend"),Fr=Hr("animationiteration"),_o=Hr("animationstart"),$r=Hr("transitionend"),Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),So=new(typeof WeakMap=="function"?WeakMap:Map);function rr(e){var t=So.get(e);return t===void 0&&(t=new Map,So.set(e,t)),t}i(rr,"cc");function qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.effectTag&1026&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}i(qt,"dc");function or(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}i(or,"ec");function Ni(e){if(qt(e)!==e)throw Error(h(188))}i(Ni,"fc");function Mo(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,o=t;;){var s=n.return;if(s===null)break;var f=s.alternate;if(f===null){if(o=s.return,o!==null){n=o;continue}break}if(s.child===f.child){for(f=s.child;f;){if(f===n)return Ni(s),e;if(f===o)return Ni(s),t;f=f.sibling}throw Error(h(188))}if(n.return!==o.return)n=s,o=f;else{for(var m=!1,g=s.child;g;){if(g===n){m=!0,n=s,o=f;break}if(g===o){m=!0,o=s,n=f;break}g=g.sibling}if(!m){for(g=f.child;g;){if(g===n){m=!0,n=f,o=s;break}if(g===o){m=!0,o=f,n=s;break}g=g.sibling}if(!m)throw Error(h(189))}}if(n.alternate!==o)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}i(Mo,"gc");function Kl(e){if(e=Mo(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}i(Kl,"hc");function Dt(e,t){if(t==null)throw Error(h(30));return e==null?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}i(Dt,"ic");function Vr(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}i(Vr,"jc");var Br=null;function Ca(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var o=0;o<t.length&&!e.isPropagationStopped();o++)W(e,t[o],n[o]);else t&&W(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}i(Ca,"lc");function To(e){if(e!==null&&(Br=Dt(Br,e)),e=Br,Br=null,e){if(Vr(e,Ca),Br)throw Error(h(95));if(H)throw e=X,H=!1,X=null,e}}i(To,"mc");function Ri(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}i(Ri,"nc");function Yl(e){if(!ae)return!1;e="on"+e;var t=e in document;return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t=typeof t[e]=="function"),t}i(Yl,"oc");var bt=[];function Gl(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>bt.length&&bt.push(e)}i(Gl,"qc");function Pi(e,t,n,o){if(bt.length){var s=bt.pop();return s.topLevelType=e,s.eventSystemFlags=o,s.nativeEvent=t,s.targetInst=n,s}return{topLevelType:e,eventSystemFlags:o,nativeEvent:t,targetInst:n,ancestors:[]}}i(Pi,"rc");function Oi(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var o=n;if(o.tag===3)o=o.stateNode.containerInfo;else{for(;o.return;)o=o.return;o=o.tag!==3?null:o.stateNode.containerInfo}if(!o)break;t=n.tag,t!==5&&t!==6||e.ancestors.push(n),n=ur(o)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var s=Ri(e.nativeEvent);o=e.topLevelType;var f=e.nativeEvent,m=e.eventSystemFlags;n===0&&(m|=64);for(var g=null,S=0;S<q.length;S++){var M=q[S];M&&(M=M.extractEvents(o,t,f,s,m))&&(g=Dt(g,M))}To(g)}}i(Oi,"sc");function Ct(e,t,n){if(!n.has(e)){switch(e){case"scroll":yn(t,"scroll",!0);break;case"focus":case"blur":yn(t,"focus",!0),yn(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":Yl(e)&&yn(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:Rn.indexOf(e)===-1&&Ke(e,t)}n.set(e,null)}}i(Ct,"uc");var kt,Xt,Lo,Di=!1,At=[],Bt=null,zt=null,Cn=null,ir=new Map,tt=new Map,Pn=[],yt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),wt="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function We(e,t){var n=rr(t);yt.forEach(function(o){Ct(o,t,n)}),wt.forEach(function(o){Ct(o,t,n)})}i(We,"Jc");function Ue(e,t,n,o,s){return{blockedOn:e,topLevelType:t,eventSystemFlags:n|32,nativeEvent:s,container:o}}i(Ue,"Kc");function Ai(e,t){switch(e){case"focus":case"blur":Bt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tt.delete(t.pointerId)}}i(Ai,"Lc");function On(e,t,n,o,s,f){return e===null||e.nativeEvent!==f?(e=Ue(t,n,o,s,f),t!==null&&(t=cr(t),t!==null&&Xt(t)),e):(e.eventSystemFlags|=o,e)}i(On,"Mc");function Xl(e,t,n,o,s){switch(t){case"focus":return Bt=On(Bt,e,t,n,o,s),!0;case"dragenter":return zt=On(zt,e,t,n,o,s),!0;case"mouseover":return Cn=On(Cn,e,t,n,o,s),!0;case"pointerover":var f=s.pointerId;return ir.set(f,On(ir.get(f)||null,e,t,n,o,s)),!0;case"gotpointercapture":return f=s.pointerId,tt.set(f,On(tt.get(f)||null,e,t,n,o,s)),!0}return!1}i(Xl,"Oc");function Jl(e){var t=ur(e.target);if(t!==null){var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=or(n),t!==null){e.blockedOn=t,v.unstable_runWithPriority(e.priority,function(){Lo(n)});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}i(Jl,"Pc");function Dn(e){if(e.blockedOn!==null)return!1;var t=Oo(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(t!==null){var n=cr(t);return n!==null&&Xt(n),e.blockedOn=t,!1}return!0}i(Dn,"Qc");function An(e,t,n){Dn(e)&&n.delete(t)}i(An,"Sc");function No(){for(Di=!1;0<At.length;){var e=At[0];if(e.blockedOn!==null){e=cr(e.blockedOn),e!==null&&kt(e);break}var t=Oo(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);t!==null?e.blockedOn=t:At.shift()}Bt!==null&&Dn(Bt)&&(Bt=null),zt!==null&&Dn(zt)&&(zt=null),Cn!==null&&Dn(Cn)&&(Cn=null),ir.forEach(An),tt.forEach(An)}i(No,"Tc");function lr(e,t){e.blockedOn===t&&(e.blockedOn=null,Di||(Di=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,No)))}i(lr,"Uc");function zr(e){function t(s){return lr(s,e)}if(i(t,"b"),0<At.length){lr(At[0],e);for(var n=1;n<At.length;n++){var o=At[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Bt!==null&&lr(Bt,e),zt!==null&&lr(zt,e),Cn!==null&&lr(Cn,e),ir.forEach(t),tt.forEach(t),n=0;n<Pn.length;n++)o=Pn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Pn.length&&(n=Pn[0],n.blockedOn===null);)Jl(n),n.blockedOn===null&&Pn.shift()}i(zr,"Vc");var Ii={},Hi=new Map,Ro=new Map,es=["abort","abort",ko,"animationEnd",Fr,"animationIteration",_o,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$r,"transitionEnd","waiting","waiting"];function ge(e,t){for(var n=0;n<e.length;n+=2){var o=e[n],s=e[n+1],f="on"+(s[0].toUpperCase()+s.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[o],eventPriority:t},Ro.set(o,t),Hi.set(o,f),Ii[s]=f}}i(ge,"ad"),ge("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),ge("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),ge(es,2);for(var jr="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Po=0;Po<jr.length;Po++)Ro.set(jr[Po],0);var ya=v.unstable_UserBlockingPriority,Ve=v.unstable_runWithPriority,Ur=!0;function Ke(e,t){yn(t,e,!1)}i(Ke,"F");function yn(e,t,n){var o=Ro.get(t);switch(o===void 0?2:o){case 0:o=ts.bind(null,t,1,e);break;case 1:o=Wr.bind(null,t,1,e);break;default:o=wn.bind(null,t,1,e)}n?e.addEventListener(t,o,!0):e.addEventListener(t,o,!1)}i(yn,"vc");function ts(e,t,n,o){je||Et();var s=wn,f=je;je=!0;try{ct(s,e,t,n,o)}finally{(je=f)||ne()}}i(ts,"gd");function Wr(e,t,n,o){Ve(ya,wn.bind(null,e,t,n,o))}i(Wr,"hd");function wn(e,t,n,o){if(Ur)if(0<At.length&&-1<yt.indexOf(e))e=Ue(null,e,t,n,o),At.push(e);else{var s=Oo(e,t,n,o);if(s===null)Ai(e,o);else if(-1<yt.indexOf(e))e=Ue(s,e,t,n,o),At.push(e);else if(!Xl(s,e,t,n,o)){Ai(e,o),e=Pi(e,o,null,t);try{xe(Oi,e)}finally{Gl(e)}}}}i(wn,"id");function Oo(e,t,n,o){if(n=Ri(o),n=ur(n),n!==null){var s=qt(n);if(s===null)n=null;else{var f=s.tag;if(f===13){if(n=or(s),n!==null)return n;n=null}else if(f===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null)}}e=Pi(e,o,n,t);try{xe(Oi,e)}finally{Gl(e)}return null}i(Oo,"Rc");var sr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ns=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(e){ns.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sr[t]=sr[e]})});function Do(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||sr.hasOwnProperty(e)&&sr[e]?(""+t).trim():t+"px"}i(Do,"ld");function Fi(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,s=Do(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,s):e[n]=s}}i(Fi,"md");var rs=T({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ao(e,t){if(t){if(rs[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e,""));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62,""))}}i(Ao,"od");function Io(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}i(Io,"pd");var Ho=ql.html;function jt(e,t){e=e.nodeType===9||e.nodeType===11?e:e.ownerDocument;var n=rr(e);t=ie[t];for(var o=0;o<t.length;o++)Ct(t[o],e,n)}i(jt,"rd");function In(){}i(In,"sd");function Zr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}i(Zr,"td");function os(e){for(;e&&e.firstChild;)e=e.firstChild;return e}i(os,"ud");function Fo(e,t){var n=os(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=os(n)}}i(Fo,"vd");function $i(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$i(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}i($i,"wd");function Vi(){for(var e=window,t=Zr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zr(e.document)}return t}i(Vi,"xd");function Bi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}i(Bi,"yd");var zi="$",Hn="/$",ar="$?",$o="$!",Vo=null,Bo=null;function ji(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}i(ji,"Fd");function zo(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}i(zo,"Gd");var jo=typeof setTimeout=="function"?setTimeout:void 0,is=typeof clearTimeout=="function"?clearTimeout:void 0;function Fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}i(Fn,"Jd");function Ui(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===zi||n===$o||n===ar){if(t===0)return e;t--}else n===Hn&&t++}e=e.previousSibling}return null}i(Ui,"Kd");var Uo=Math.random().toString(36).slice(2),Jt="__reactInternalInstance$"+Uo,qr="__reactEventHandlers$"+Uo,en="__reactContainere$"+Uo;function ur(e){var t=e[Jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[Jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ui(e);e!==null;){if(n=e[Jt])return n;e=Ui(e)}return t}e=n,n=e.parentNode}return null}i(ur,"tc");function cr(e){return e=e[Jt]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}i(cr,"Nc");function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}i(xn,"Pd");function Wo(e){return e[qr]||null}i(Wo,"Qd");function Qt(e){do e=e.return;while(e&&e.tag!==5);return e||null}i(Qt,"Rd");function st(e,t){var n=e.stateNode;if(!n)return null;var o=fe(n);if(!o)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}i(st,"Sd");function Qr(e,t,n){(t=st(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=Dt(n._dispatchListeners,t),n._dispatchInstances=Dt(n._dispatchInstances,e))}i(Qr,"Td");function ls(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=Qt(t);for(t=n.length;0<t--;)Qr(n[t],"captured",e);for(t=0;t<n.length;t++)Qr(n[t],"bubbled",e)}}i(ls,"Ud");function Zo(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=st(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=Dt(n._dispatchListeners,t),n._dispatchInstances=Dt(n._dispatchInstances,e))}i(Zo,"Vd");function ss(e){e&&e.dispatchConfig.registrationName&&Zo(e._targetInst,null,e)}i(ss,"Wd");function $n(e){Vr(e,ls)}i($n,"Xd");var tn=null,qo=null,Kr=null;function Qo(){if(Kr)return Kr;var e,t=qo,n=t.length,o,s="value"in tn?tn.value:tn.textContent,f=s.length;for(e=0;e<n&&t[e]===s[e];e++);var m=n-e;for(o=1;o<=m&&t[n-o]===s[f-o];o++);return Kr=s.slice(e,1<o?1-o:void 0)}i(Qo,"ae");function Yr(){return!0}i(Yr,"be");function Gr(){return!1}i(Gr,"ce");function Nt(e,t,n,o){this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface;for(var s in e)e.hasOwnProperty(s)&&((t=e[s])?this[s]=t(n):s==="target"?this.target=o:this[s]=n[s]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Yr:Gr,this.isPropagationStopped=Gr,this}i(Nt,"G"),T(Nt.prototype,{preventDefault:i(function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Yr)},"preventDefault"),stopPropagation:i(function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Yr)},"stopPropagation"),persist:i(function(){this.isPersistent=Yr},"persist"),isPersistent:Gr,destructor:i(function(){var e=this.constructor.Interface,t;for(t in e)this[t]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Gr,this._dispatchInstances=this._dispatchListeners=null},"destructor")}),Nt.Interface={type:null,target:null,currentTarget:i(function(){return null},"currentTarget"),eventPhase:null,bubbles:null,cancelable:null,timeStamp:i(function(e){return e.timeStamp||Date.now()},"timeStamp"),defaultPrevented:null,isTrusted:null},Nt.extend=function(e){function t(){}i(t,"b");function n(){return o.apply(this,arguments)}i(n,"c");var o=this;t.prototype=o.prototype;var s=new t;return T(s,n.prototype),n.prototype=s,n.prototype.constructor=n,n.Interface=T({},o.Interface,e),n.extend=o.extend,Wi(n),n},Wi(Nt);function as(e,t,n,o){if(this.eventPool.length){var s=this.eventPool.pop();return this.call(s,e,t,n,o),s}return new this(e,t,n,o)}i(as,"ee");function us(e){if(!(e instanceof this))throw Error(h(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}i(us,"fe");function Wi(e){e.eventPool=[],e.getPooled=as,e.release=us}i(Wi,"de");var cs=Nt.extend({data:null}),ds=Nt.extend({data:null}),wa=[9,13,27,32],Ko=ae&&"CompositionEvent"in window,dr=null;ae&&"documentMode"in document&&(dr=document.documentMode);var fs=ae&&"TextEvent"in window&&!dr,Zi=ae&&(!Ko||dr&&8<dr&&11>=dr),qi=" ",nn={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Qi=!1;function Ki(e,t){switch(e){case"keyup":return wa.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}i(Ki,"qe");function Yi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}i(Yi,"re");var Vn=!1;function ms(e,t){switch(e){case"compositionend":return Yi(t);case"keypress":return t.which!==32?null:(Qi=!0,qi);case"textInput":return e=t.data,e===qi&&Qi?null:e;default:return null}}i(ms,"te");function Xr(e,t){if(Vn)return e==="compositionend"||!Ko&&Ki(e,t)?(e=Qo(),Kr=qo=tn=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zi&&t.locale!=="ko"?null:t.data;default:return null}}i(Xr,"ue");var Gi={eventTypes:nn,extractEvents:i(function(e,t,n,o){var s;if(Ko)e:{switch(e){case"compositionstart":var f=nn.compositionStart;break e;case"compositionend":f=nn.compositionEnd;break e;case"compositionupdate":f=nn.compositionUpdate;break e}f=void 0}else Vn?Ki(e,n)&&(f=nn.compositionEnd):e==="keydown"&&n.keyCode===229&&(f=nn.compositionStart);return f?(Zi&&n.locale!=="ko"&&(Vn||f!==nn.compositionStart?f===nn.compositionEnd&&Vn&&(s=Qo()):(tn=o,qo="value"in tn?tn.value:tn.textContent,Vn=!0)),f=cs.getPooled(f,t,n,o),s?f.data=s:(s=Yi(n),s!==null&&(f.data=s)),$n(f),s=f):s=null,(e=fs?ms(e,n):Xr(e,n))?(t=ds.getPooled(nn.beforeInput,t,n,o),t.data=e,$n(t)):t=null,s===null?t:t===null?s:[s,t]},"extractEvents")},ps={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ps[e.type]:t==="textarea"}i(Xi,"xe");var Yo={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Ji(e,t,n){return e=Nt.getPooled(Yo.change,e,t,n),e.type="change",He(n),$n(e),e}i(Ji,"ze");var fr=null,mr=null;function xa(e){To(e)}i(xa,"Ce");function rn(e){var t=xn(e);if(xo(t))return e}i(rn,"De");function el(e,t){if(e==="change")return t}i(el,"Ee");var Go=!1;ae&&(Go=Yl("input")&&(!document.documentMode||9<document.documentMode));function tl(){fr&&(fr.detachEvent("onpropertychange",nl),mr=fr=null)}i(tl,"Ge");function nl(e){if(e.propertyName==="value"&&rn(mr))if(e=Ji(mr,e,Ri(e)),je)To(e);else{je=!0;try{Je(xa,e)}finally{je=!1,ne()}}}i(nl,"He");function hs(e,t,n){e==="focus"?(tl(),fr=t,mr=n,fr.attachEvent("onpropertychange",nl)):e==="blur"&&tl()}i(hs,"Ie");function gs(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rn(mr)}i(gs,"Je");function rl(e,t){if(e==="click")return rn(t)}i(rl,"Ke");function ol(e,t){if(e==="input"||e==="change")return rn(t)}i(ol,"Le");var vs={eventTypes:Yo,_isInputEventSupported:Go,extractEvents:i(function(e,t,n,o){var s=t?xn(t):window,f=s.nodeName&&s.nodeName.toLowerCase();if(f==="select"||f==="input"&&s.type==="file")var m=el;else if(Xi(s))if(Go)m=ol;else{m=gs;var g=hs}else(f=s.nodeName)&&f.toLowerCase()==="input"&&(s.type==="checkbox"||s.type==="radio")&&(m=rl);if(m&&(m=m(e,t)))return Ji(m,n,o);g&&g(e,s,t),e==="blur"&&(e=s._wrapperState)&&e.controlled&&s.type==="number"&&_i(s,"number",s.value)},"extractEvents")},pr=Nt.extend({view:null,detail:null}),Cs={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function il(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cs[e])?!!t[e]:!1}i(il,"Pe");function Bn(){return il}i(Bn,"Qe");var ll=0,Jr=0,Xo=!1,sl=!1,hr=pr.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Bn,button:null,buttons:null,relatedTarget:i(function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},"relatedTarget"),movementX:i(function(e){if("movementX"in e)return e.movementX;var t=ll;return ll=e.screenX,Xo?e.type==="mousemove"?e.screenX-t:0:(Xo=!0,0)},"movementX"),movementY:i(function(e){if("movementY"in e)return e.movementY;var t=Jr;return Jr=e.screenY,sl?e.type==="mousemove"?e.screenY-t:0:(sl=!0,0)},"movementY")}),Jo=hr.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),gr={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Ea={eventTypes:gr,extractEvents:i(function(e,t,n,o,s){var f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout";if(f&&!(s&32)&&(n.relatedTarget||n.fromElement)||!m&&!f)return null;if(f=o.window===o?o:(f=o.ownerDocument)?f.defaultView||f.parentWindow:window,m){if(m=t,t=(t=n.relatedTarget||n.toElement)?ur(t):null,t!==null){var g=qt(t);(t!==g||t.tag!==5&&t.tag!==6)&&(t=null)}}else m=null;if(m===t)return null;if(e==="mouseout"||e==="mouseover")var S=hr,M=gr.mouseLeave,re=gr.mouseEnter,le="mouse";else(e==="pointerout"||e==="pointerover")&&(S=Jo,M=gr.pointerLeave,re=gr.pointerEnter,le="pointer");if(e=m==null?f:xn(m),f=t==null?f:xn(t),M=S.getPooled(M,m,n,o),M.type=le+"leave",M.target=e,M.relatedTarget=f,n=S.getPooled(re,t,n,o),n.type=le+"enter",n.target=f,n.relatedTarget=e,o=m,le=t,o&&le)e:{for(S=o,re=le,m=0,e=S;e;e=Qt(e))m++;for(e=0,t=re;t;t=Qt(t))e++;for(;0<m-e;)S=Qt(S),m--;for(;0<e-m;)re=Qt(re),e--;for(;m--;){if(S===re||S===re.alternate)break e;S=Qt(S),re=Qt(re)}S=null}else S=null;for(re=S,S=[];o&&o!==re&&(m=o.alternate,!(m!==null&&m===re));)S.push(o),o=Qt(o);for(o=[];le&&le!==re&&(m=le.alternate,!(m!==null&&m===re));)o.push(le),le=Qt(le);for(le=0;le<S.length;le++)Zo(S[le],"bubbled",M);for(le=o.length;0<le--;)Zo(o[le],"captured",n);return s&64?[M,n]:[M]},"extractEvents")};function ba(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}i(ba,"Ze");var En=typeof Object.is=="function"?Object.is:ba,ka=Object.prototype.hasOwnProperty;function vr(e,t){if(En(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++)if(!ka.call(t,n[o])||!En(e[n[o]],t[n[o]]))return!1;return!0}i(vr,"bf");var ys=ae&&"documentMode"in document&&11>=document.documentMode,al={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},zn=null,eo=null,Cr=null,to=!1;function ul(e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;return to||zn==null||zn!==Zr(n)?null:(n=zn,"selectionStart"in n&&Bi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Cr&&vr(Cr,n)?null:(Cr=n,e=Nt.getPooled(al.select,eo,e,t),e.type="select",e.target=zn,$n(e),e))}i(ul,"jf");var _a={eventTypes:al,extractEvents:i(function(e,t,n,o,s,f){if(s=f||(o.window===o?o.document:o.nodeType===9?o:o.ownerDocument),!(f=!s)){e:{s=rr(s),f=ie.onSelect;for(var m=0;m<f.length;m++)if(!s.has(f[m])){s=!1;break e}s=!0}f=!s}if(f)return null;switch(s=t?xn(t):window,e){case"focus":(Xi(s)||s.contentEditable==="true")&&(zn=s,eo=t,Cr=null);break;case"blur":Cr=eo=zn=null;break;case"mousedown":to=!0;break;case"contextmenu":case"mouseup":case"dragend":return to=!1,ul(n,o);case"selectionchange":if(ys)break;case"keydown":case"keyup":return ul(n,o)}return null},"extractEvents")},ws=Nt.extend({animationName:null,elapsedTime:null,pseudoElement:null}),xs=Nt.extend({clipboardData:i(function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData},"clipboardData")}),Es=pr.extend({relatedTarget:null});function no(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}i(no,"of");var bs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ks={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_s=pr.extend({key:i(function(e){if(e.key){var t=bs[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=no(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ks[e.keyCode]||"Unidentified":""},"key"),location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Bn,charCode:i(function(e){return e.type==="keypress"?no(e):0},"charCode"),keyCode:i(function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},"keyCode"),which:i(function(e){return e.type==="keypress"?no(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0},"which")}),Ss=hr.extend({dataTransfer:null}),Ms=pr.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Bn}),Ts=Nt.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Ls=hr.extend({deltaX:i(function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},"deltaX"),deltaY:i(function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},"deltaY"),deltaZ:null,deltaMode:null}),cl={eventTypes:Ii,extractEvents:i(function(e,t,n,o){var s=Hi.get(e);if(!s)return null;switch(e){case"keypress":if(no(n)===0)return null;case"keydown":case"keyup":e=_s;break;case"blur":case"focus":e=Es;break;case"click":if(n.button===2)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=hr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=Ss;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=Ms;break;case ko:case Fr:case _o:e=ws;break;case $r:e=Ts;break;case"scroll":e=pr;break;case"wheel":e=Ls;break;case"copy":case"cut":case"paste":e=xs;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=Jo;break;default:e=Nt}return t=e.getPooled(s,t,n,o),$n(t),t},"extractEvents")};if(R)throw Error(h(101));R=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),oe();var dl=cr;fe=Wo,Oe=dl,lt=xn,G({SimpleEventPlugin:cl,EnterLeaveEventPlugin:Ea,ChangeEventPlugin:vs,SelectEventPlugin:_a,BeforeInputEventPlugin:Gi});var ei=[],jn=-1;function Ye(e){0>jn||(e.current=ei[jn],ei[jn]=null,jn--)}i(Ye,"H");function nt(e,t){jn++,ei[jn]=e.current,e.current=t}i(nt,"I");var on={},ft={current:on},_t={current:!1},ln=on;function Un(e,t){var n=e.type.contextTypes;if(!n)return on;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var s={},f;for(f in n)s[f]=t[f];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}i(Un,"Cf");function St(e){return e=e.childContextTypes,e!=null}i(St,"L");function Wn(){Ye(_t),Ye(ft)}i(Wn,"Df");function ro(e,t,n){if(ft.current!==on)throw Error(h(168));nt(ft,t),nt(_t,n)}i(ro,"Ef");function oo(e,t,n){var o=e.stateNode;if(e=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var s in o)if(!(s in e))throw Error(h(108,Zt(t)||"Unknown",s));return T({},n,{},o)}i(oo,"Ff");function Zn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,ln=ft.current,nt(ft,e),nt(_t,_t.current),!0}i(Zn,"Gf");function io(e,t,n){var o=e.stateNode;if(!o)throw Error(h(169));n?(e=oo(e,t,ln),o.__reactInternalMemoizedMergedChildContext=e,Ye(_t),Ye(ft),nt(ft,e)):Ye(_t),nt(_t,n)}i(io,"Hf");var ti=v.unstable_runWithPriority,yr=v.unstable_scheduleCallback,sn=v.unstable_cancelCallback,lo=v.unstable_requestPaint,an=v.unstable_now,ni=v.unstable_getCurrentPriorityLevel,qn=v.unstable_ImmediatePriority,so=v.unstable_UserBlockingPriority,ao=v.unstable_NormalPriority,r=v.unstable_LowPriority,a=v.unstable_IdlePriority,u={},c=v.unstable_shouldYield,d=lo!==void 0?lo:function(){},p=null,C=null,y=!1,E=an(),L=1e4>E?an:function(){return an()-E};function Q(){switch(ni()){case qn:return 99;case so:return 98;case ao:return 97;case r:return 96;case a:return 95;default:throw Error(h(332))}}i(Q,"ag");function $(e){switch(e){case 99:return qn;case 98:return so;case 97:return ao;case 96:return r;case 95:return a;default:throw Error(h(332))}}i($,"bg");function ee(e,t){return e=$(e),ti(e,t)}i(ee,"cg");function me(e,t,n){return e=$(e),yr(e,t,n)}i(me,"dg");function z(e){return p===null?(p=[e],C=yr(qn,ue)):p.push(e),u}i(z,"eg");function we(){if(C!==null){var e=C;C=null,sn(e)}ue()}i(we,"gg");function ue(){if(!y&&p!==null){y=!0;var e=0;try{var t=p;ee(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),p=null}catch(n){throw p!==null&&(p=p.slice(e+1)),yr(qn,we),n}finally{y=!1}}}i(ue,"fg");function Se(e,t,n){return n/=10,1073741821-(((1073741821-e+t/10)/n|0)+1)*n}i(Se,"hg");function Ee(e,t){if(e&&e.defaultProps){t=T({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}i(Ee,"ig");var Ne={current:null},_e=null,qe=null,Ce=null;function Ze(){Ce=qe=_e=null}i(Ze,"ng");function mt(e){var t=Ne.current;Ye(Ne),e.type._context._currentValue=t}i(mt,"og");function bn(e,t){for(;e!==null;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t);else if(n!==null&&n.childExpirationTime<t)n.childExpirationTime=t;else break;e=e.return}}i(bn,"pg");function ot(e,t){_e=e,Ce=qe=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.expirationTime>=t&&(dn=!0),e.firstContext=null)}i(ot,"qg");function Ge(e,t){if(Ce!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(Ce=e,t=1073741823),t={context:e,observedBits:t,next:null},qe===null){if(_e===null)throw Error(h(308));qe=t,_e.dependencies={expirationTime:0,firstContext:t,responders:null}}else qe=qe.next=t;return e._currentValue}i(Ge,"sg");var It=!1;function Qe(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}i(Qe,"ug");function Rt(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}i(Rt,"vg");function Kt(e,t){return e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null},e.next=e}i(Kt,"wg");function un(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}i(un,"xg");function Sa(e,t){var n=e.alternate;n!==null&&Rt(n,e),e=e.updateQueue,n=e.baseQueue,n===null?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}i(Sa,"yg");function ri(e,t,n,o){var s=e.updateQueue;It=!1;var f=s.baseQueue,m=s.shared.pending;if(m!==null){if(f!==null){var g=f.next;f.next=m.next,m.next=g}f=m,s.shared.pending=null,g=e.alternate,g!==null&&(g=g.updateQueue,g!==null&&(g.baseQueue=m))}if(f!==null){g=f.next;var S=s.baseState,M=0,re=null,le=null,Ae=null;if(g!==null){var ze=g;do{if(m=ze.expirationTime,m<o){var Wt={expirationTime:ze.expirationTime,suspenseConfig:ze.suspenseConfig,tag:ze.tag,payload:ze.payload,callback:ze.callback,next:null};Ae===null?(le=Ae=Wt,re=S):Ae=Ae.next=Wt,m>M&&(M=m)}else{Ae!==null&&(Ae=Ae.next={expirationTime:1073741823,suspenseConfig:ze.suspenseConfig,tag:ze.tag,payload:ze.payload,callback:ze.callback,next:null}),Eu(m,ze.suspenseConfig);e:{var xt=e,b=ze;switch(m=t,Wt=n,b.tag){case 1:if(xt=b.payload,typeof xt=="function"){S=xt.call(Wt,S,m);break e}S=xt;break e;case 3:xt.effectTag=xt.effectTag&-4097|64;case 0:if(xt=b.payload,m=typeof xt=="function"?xt.call(Wt,S,m):xt,m==null)break e;S=T({},S,m);break e;case 2:It=!0}}ze.callback!==null&&(e.effectTag|=32,m=s.effects,m===null?s.effects=[ze]:m.push(ze))}if(ze=ze.next,ze===null||ze===g){if(m=s.shared.pending,m===null)break;ze=f.next=m.next,m.next=g,s.baseQueue=f=m,s.shared.pending=null}}while(!0)}Ae===null?re=S:Ae.next=le,s.baseState=re,s.baseQueue=Ae,Fl(M),e.expirationTime=M,e.memoizedState=S}}i(ri,"zg");function Ma(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],s=o.callback;if(s!==null){if(o.callback=null,o=s,s=n,typeof o!="function")throw Error(h(191,o));o.call(s)}}}i(Ma,"Cg");var oi=Ot.ReactCurrentBatchConfig,Ta=new V.Component().refs;function fl(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.expirationTime===0&&(e.updateQueue.baseState=n)}i(fl,"Fg");var ml={isMounted:i(function(e){return(e=e._reactInternalFiber)?qt(e)===e:!1},"isMounted"),enqueueSetState:i(function(e,t,n){e=e._reactInternalFiber;var o=mn(),s=oi.suspense;o=_r(o,e,s),s=Kt(o,s),s.payload=t,n!=null&&(s.callback=n),un(e,s),Gn(e,o)},"enqueueSetState"),enqueueReplaceState:i(function(e,t,n){e=e._reactInternalFiber;var o=mn(),s=oi.suspense;o=_r(o,e,s),s=Kt(o,s),s.tag=1,s.payload=t,n!=null&&(s.callback=n),un(e,s),Gn(e,o)},"enqueueReplaceState"),enqueueForceUpdate:i(function(e,t){e=e._reactInternalFiber;var n=mn(),o=oi.suspense;n=_r(n,e,o),o=Kt(n,o),o.tag=2,t!=null&&(o.callback=t),un(e,o),Gn(e,n)},"enqueueForceUpdate")};function La(e,t,n,o,s,f,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,m):t.prototype&&t.prototype.isPureReactComponent?!vr(n,o)||!vr(s,f):!0}i(La,"Kg");function Na(e,t,n){var o=!1,s=on,f=t.contextType;return typeof f=="object"&&f!==null?f=Ge(f):(s=St(t)?ln:ft.current,o=t.contextTypes,f=(o=o!=null)?Un(e,s):on),t=new t(n,f),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ml,e.stateNode=t,t._reactInternalFiber=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=f),t}i(Na,"Lg");function Ra(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&ml.enqueueReplaceState(t,t.state,null)}i(Ra,"Mg");function Ns(e,t,n,o){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs=Ta,Qe(e);var f=t.contextType;typeof f=="object"&&f!==null?s.context=Ge(f):(f=St(t)?ln:ft.current,s.context=Un(e,f)),ri(e,n,s,o),s.state=e.memoizedState,f=t.getDerivedStateFromProps,typeof f=="function"&&(fl(e,t,f,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&ml.enqueueReplaceState(s,s.state,null),ri(e,n,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.effectTag|=4)}i(Ns,"Ng");var pl=Array.isArray;function ii(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var o=n.stateNode}if(!o)throw Error(h(147,e));var s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=i(function(f){var m=o.refs;m===Ta&&(m=o.refs={}),f===null?delete m[s]:m[s]=f},"b"),t._stringRef=s,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}i(ii,"Pg");function hl(e,t){if(e.type!=="textarea")throw Error(h(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}i(hl,"Qg");function Pa(e){function t(b,x){if(e){var N=b.lastEffect;N!==null?(N.nextEffect=x,b.lastEffect=x):b.firstEffect=b.lastEffect=x,x.nextEffect=null,x.effectTag=8}}i(t,"b");function n(b,x){if(!e)return null;for(;x!==null;)t(b,x),x=x.sibling;return null}i(n,"c");function o(b,x){for(b=new Map;x!==null;)x.key!==null?b.set(x.key,x):b.set(x.index,x),x=x.sibling;return b}i(o,"d");function s(b,x){return b=Lr(b,x),b.index=0,b.sibling=null,b}i(s,"e");function f(b,x,N){return b.index=N,e?(N=b.alternate,N!==null?(N=N.index,N<x?(b.effectTag=2,x):N):(b.effectTag=2,x)):x}i(f,"f");function m(b){return e&&b.alternate===null&&(b.effectTag=2),b}i(m,"g");function g(b,x,N,Z){return x===null||x.tag!==6?(x=da(N,b.mode,Z),x.return=b,x):(x=s(x,N),x.return=b,x)}i(g,"h");function S(b,x,N,Z){return x!==null&&x.elementType===N.type?(Z=s(x,N.props),Z.ref=ii(b,x,N),Z.return=b,Z):(Z=$l(N.type,N.key,N.props,null,b.mode,Z),Z.ref=ii(b,x,N),Z.return=b,Z)}i(S,"k");function M(b,x,N,Z){return x===null||x.tag!==4||x.stateNode.containerInfo!==N.containerInfo||x.stateNode.implementation!==N.implementation?(x=fa(N,b.mode,Z),x.return=b,x):(x=s(x,N.children||[]),x.return=b,x)}i(M,"l");function re(b,x,N,Z,J){return x===null||x.tag!==7?(x=Xn(N,b.mode,Z,J),x.return=b,x):(x=s(x,N),x.return=b,x)}i(re,"m");function le(b,x,N){if(typeof x=="string"||typeof x=="number")return x=da(""+x,b.mode,N),x.return=b,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case go:return N=$l(x.type,x.key,x.props,null,b.mode,N),N.ref=ii(b,null,x),N.return=b,N;case Mn:return x=fa(x,b.mode,N),x.return=b,x}if(pl(x)||er(x))return x=Xn(x,b.mode,N,null),x.return=b,x;hl(b,x)}return null}i(le,"p");function Ae(b,x,N,Z){var J=x!==null?x.key:null;if(typeof N=="string"||typeof N=="number")return J!==null?null:g(b,x,""+N,Z);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case go:return N.key===J?N.type===hn?re(b,x,N.props.children,Z,J):S(b,x,N,Z):null;case Mn:return N.key===J?M(b,x,N,Z):null}if(pl(N)||er(N))return J!==null?null:re(b,x,N,Z,null);hl(b,N)}return null}i(Ae,"x");function ze(b,x,N,Z,J){if(typeof Z=="string"||typeof Z=="number")return b=b.get(N)||null,g(x,b,""+Z,J);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case go:return b=b.get(Z.key===null?N:Z.key)||null,Z.type===hn?re(x,b,Z.props.children,J,Z.key):S(x,b,Z,J);case Mn:return b=b.get(Z.key===null?N:Z.key)||null,M(x,b,Z,J)}if(pl(Z)||er(Z))return b=b.get(N)||null,re(x,b,Z,J,null);hl(x,Z)}return null}i(ze,"z");function Wt(b,x,N,Z){for(var J=null,se=null,ye=x,$e=x=0,rt=null;ye!==null&&$e<N.length;$e++){ye.index>$e?(rt=ye,ye=null):rt=ye.sibling;var Re=Ae(b,ye,N[$e],Z);if(Re===null){ye===null&&(ye=rt);break}e&&ye&&Re.alternate===null&&t(b,ye),x=f(Re,x,$e),se===null?J=Re:se.sibling=Re,se=Re,ye=rt}if($e===N.length)return n(b,ye),J;if(ye===null){for(;$e<N.length;$e++)ye=le(b,N[$e],Z),ye!==null&&(x=f(ye,x,$e),se===null?J=ye:se.sibling=ye,se=ye);return J}for(ye=o(b,ye);$e<N.length;$e++)rt=ze(ye,b,$e,N[$e],Z),rt!==null&&(e&&rt.alternate!==null&&ye.delete(rt.key===null?$e:rt.key),x=f(rt,x,$e),se===null?J=rt:se.sibling=rt,se=rt);return e&&ye.forEach(function(Jn){return t(b,Jn)}),J}i(Wt,"ca");function xt(b,x,N,Z){var J=er(N);if(typeof J!="function")throw Error(h(150));if(N=J.call(N),N==null)throw Error(h(151));for(var se=J=null,ye=x,$e=x=0,rt=null,Re=N.next();ye!==null&&!Re.done;$e++,Re=N.next()){ye.index>$e?(rt=ye,ye=null):rt=ye.sibling;var Jn=Ae(b,ye,Re.value,Z);if(Jn===null){ye===null&&(ye=rt);break}e&&ye&&Jn.alternate===null&&t(b,ye),x=f(Jn,x,$e),se===null?J=Jn:se.sibling=Jn,se=Jn,ye=rt}if(Re.done)return n(b,ye),J;if(ye===null){for(;!Re.done;$e++,Re=N.next())Re=le(b,Re.value,Z),Re!==null&&(x=f(Re,x,$e),se===null?J=Re:se.sibling=Re,se=Re);return J}for(ye=o(b,ye);!Re.done;$e++,Re=N.next())Re=ze(ye,b,$e,Re.value,Z),Re!==null&&(e&&Re.alternate!==null&&ye.delete(Re.key===null?$e:Re.key),x=f(Re,x,$e),se===null?J=Re:se.sibling=Re,se=Re);return e&&ye.forEach(function(oc){return t(b,oc)}),J}return i(xt,"D"),function(b,x,N,Z){var J=typeof N=="object"&&N!==null&&N.type===hn&&N.key===null;J&&(N=N.props.children);var se=typeof N=="object"&&N!==null;if(se)switch(N.$$typeof){case go:e:{for(se=N.key,J=x;J!==null;){if(J.key===se){switch(J.tag){case 7:if(N.type===hn){n(b,J.sibling),x=s(J,N.props.children),x.return=b,b=x;break e}break;default:if(J.elementType===N.type){n(b,J.sibling),x=s(J,N.props),x.ref=ii(b,J,N),x.return=b,b=x;break e}}n(b,J);break}else t(b,J);J=J.sibling}N.type===hn?(x=Xn(N.props.children,b.mode,Z,N.key),x.return=b,b=x):(Z=$l(N.type,N.key,N.props,null,b.mode,Z),Z.ref=ii(b,x,N),Z.return=b,b=Z)}return m(b);case Mn:e:{for(J=N.key;x!==null;){if(x.key===J)if(x.tag===4&&x.stateNode.containerInfo===N.containerInfo&&x.stateNode.implementation===N.implementation){n(b,x.sibling),x=s(x,N.children||[]),x.return=b,b=x;break e}else{n(b,x);break}else t(b,x);x=x.sibling}x=fa(N,b.mode,Z),x.return=b,b=x}return m(b)}if(typeof N=="string"||typeof N=="number")return N=""+N,x!==null&&x.tag===6?(n(b,x.sibling),x=s(x,N),x.return=b,b=x):(n(b,x),x=da(N,b.mode,Z),x.return=b,b=x),m(b);if(pl(N))return Wt(b,x,N,Z);if(er(N))return xt(b,x,N,Z);if(se&&hl(b,N),typeof N=="undefined"&&!J)switch(b.tag){case 1:case 0:throw b=b.type,Error(h(152,b.displayName||b.name||"Component"))}return n(b,x)}}i(Pa,"Rg");var uo=Pa(!0),Rs=Pa(!1),li={},cn={current:li},si={current:li},ai={current:li};function wr(e){if(e===li)throw Error(h(174));return e}i(wr,"ch");function Ps(e,t){switch(nt(ai,t),nt(si,e),nt(cn,li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ti(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ti(t,e)}Ye(cn),nt(cn,t)}i(Ps,"dh");function co(){Ye(cn),Ye(si),Ye(ai)}i(co,"eh");function Oa(e){wr(ai.current);var t=wr(cn.current),n=Ti(t,e.type);t!==n&&(nt(si,e),nt(cn,n))}i(Oa,"fh");function Os(e){si.current===e&&(Ye(cn),Ye(si))}i(Os,"gh");var it={current:0};function gl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===ar||n.data===$o))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.effectTag&64)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}i(gl,"hh");function Ds(e,t){return{responder:e,props:t}}i(Ds,"ih");var vl=Ot.ReactCurrentDispatcher,Ut=Ot.ReactCurrentBatchConfig,Qn=0,ut=null,Mt=null,Tt=null,Cl=!1;function Ht(){throw Error(h(321))}i(Ht,"Q");function As(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!En(e[n],t[n]))return!1;return!0}i(As,"nh");function Is(e,t,n,o,s,f){if(Qn=f,ut=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,vl.current=e===null||e.memoizedState===null?Ru:Pu,e=n(o,s),t.expirationTime===Qn){f=0;do{if(t.expirationTime=0,!(25>f))throw Error(h(301));f+=1,Tt=Mt=null,t.updateQueue=null,vl.current=Ou,e=n(o,s)}while(t.expirationTime===Qn)}if(vl.current=bl,t=Mt!==null&&Mt.next!==null,Qn=0,Tt=Mt=ut=null,Cl=!1,t)throw Error(h(300));return e}i(Is,"oh");function fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?ut.memoizedState=Tt=e:Tt=Tt.next=e,Tt}i(fo,"th");function mo(){if(Mt===null){var e=ut.alternate;e=e!==null?e.memoizedState:null}else e=Mt.next;var t=Tt===null?ut.memoizedState:Tt.next;if(t!==null)Tt=t,Mt=e;else{if(e===null)throw Error(h(310));Mt=e,e={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Tt===null?ut.memoizedState=Tt=e:Tt=Tt.next=e}return Tt}i(mo,"uh");function xr(e,t){return typeof t=="function"?t(e):t}i(xr,"vh");function yl(e){var t=mo(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var o=Mt,s=o.baseQueue,f=n.pending;if(f!==null){if(s!==null){var m=s.next;s.next=f.next,f.next=m}o.baseQueue=s=f,n.pending=null}if(s!==null){s=s.next,o=o.baseState;var g=m=f=null,S=s;do{var M=S.expirationTime;if(M<Qn){var re={expirationTime:S.expirationTime,suspenseConfig:S.suspenseConfig,action:S.action,eagerReducer:S.eagerReducer,eagerState:S.eagerState,next:null};g===null?(m=g=re,f=o):g=g.next=re,M>ut.expirationTime&&(ut.expirationTime=M,Fl(M))}else g!==null&&(g=g.next={expirationTime:1073741823,suspenseConfig:S.suspenseConfig,action:S.action,eagerReducer:S.eagerReducer,eagerState:S.eagerState,next:null}),Eu(M,S.suspenseConfig),o=S.eagerReducer===e?S.eagerState:e(o,S.action);S=S.next}while(S!==null&&S!==s);g===null?f=o:g.next=m,En(o,t.memoizedState)||(dn=!0),t.memoizedState=o,t.baseState=f,t.baseQueue=g,n.lastRenderedState=o}return[t.memoizedState,n.dispatch]}i(yl,"wh");function wl(e){var t=mo(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var o=n.dispatch,s=n.pending,f=t.memoizedState;if(s!==null){n.pending=null;var m=s=s.next;do f=e(f,m.action),m=m.next;while(m!==s);En(f,t.memoizedState)||(dn=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),n.lastRenderedState=f}return[f,o]}i(wl,"xh");function Hs(e){var t=fo();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:xr,lastRenderedState:e},e=e.dispatch=Ba.bind(null,ut,e),[t.memoizedState,e]}i(Hs,"yh");function Fs(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=ut.updateQueue,t===null?(t={lastEffect:null},ut.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}i(Fs,"Ah");function Da(){return mo().memoizedState}i(Da,"Bh");function $s(e,t,n,o){var s=fo();ut.effectTag|=e,s.memoizedState=Fs(1|t,n,void 0,o===void 0?null:o)}i($s,"Ch");function Vs(e,t,n,o){var s=mo();o=o===void 0?null:o;var f=void 0;if(Mt!==null){var m=Mt.memoizedState;if(f=m.destroy,o!==null&&As(o,m.deps)){Fs(t,n,f,o);return}}ut.effectTag|=e,s.memoizedState=Fs(1|t,n,f,o)}i(Vs,"Dh");function Aa(e,t){return $s(516,4,e,t)}i(Aa,"Eh");function xl(e,t){return Vs(516,4,e,t)}i(xl,"Fh");function Ia(e,t){return Vs(4,2,e,t)}i(Ia,"Gh");function Ha(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}i(Ha,"Hh");function Fa(e,t,n){return n=n!=null?n.concat([e]):null,Vs(4,2,Ha.bind(null,t,e),n)}i(Fa,"Ih");function Bs(){}i(Bs,"Jh");function $a(e,t){return fo().memoizedState=[e,t===void 0?null:t],e}i($a,"Kh");function El(e,t){var n=mo();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&As(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}i(El,"Lh");function Va(e,t){var n=mo();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&As(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}i(Va,"Mh");function zs(e,t,n){var o=Q();ee(98>o?98:o,function(){e(!0)}),ee(97<o?97:o,function(){var s=Ut.suspense;Ut.suspense=t===void 0?null:t;try{e(!1),n()}finally{Ut.suspense=s}})}i(zs,"Nh");function Ba(e,t,n){var o=mn(),s=oi.suspense;o=_r(o,e,s),s={expirationTime:o,suspenseConfig:s,action:n,eagerReducer:null,eagerState:null,next:null};var f=t.pending;if(f===null?s.next=s:(s.next=f.next,f.next=s),t.pending=s,f=e.alternate,e===ut||f!==null&&f===ut)Cl=!0,s.expirationTime=Qn,ut.expirationTime=Qn;else{if(e.expirationTime===0&&(f===null||f.expirationTime===0)&&(f=t.lastRenderedReducer,f!==null))try{var m=t.lastRenderedState,g=f(m,n);if(s.eagerReducer=f,s.eagerState=g,En(g,m))return}catch{}finally{}Gn(e,o)}}i(Ba,"zh");var bl={readContext:Ge,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useResponder:Ht,useDeferredValue:Ht,useTransition:Ht},Ru={readContext:Ge,useCallback:$a,useContext:Ge,useEffect:Aa,useImperativeHandle:i(function(e,t,n){return n=n!=null?n.concat([e]):null,$s(4,2,Ha.bind(null,t,e),n)},"useImperativeHandle"),useLayoutEffect:i(function(e,t){return $s(4,2,e,t)},"useLayoutEffect"),useMemo:i(function(e,t){var n=fo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},"useMemo"),useReducer:i(function(e,t,n){var o=fo();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e=o.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Ba.bind(null,ut,e),[o.memoizedState,e]},"useReducer"),useRef:i(function(e){var t=fo();return e={current:e},t.memoizedState=e},"useRef"),useState:Hs,useDebugValue:Bs,useResponder:Ds,useDeferredValue:i(function(e,t){var n=Hs(e),o=n[0],s=n[1];return Aa(function(){var f=Ut.suspense;Ut.suspense=t===void 0?null:t;try{s(e)}finally{Ut.suspense=f}},[e,t]),o},"useDeferredValue"),useTransition:i(function(e){var t=Hs(!1),n=t[0];return t=t[1],[$a(zs.bind(null,t,e),[t,e]),n]},"useTransition")},Pu={readContext:Ge,useCallback:El,useContext:Ge,useEffect:xl,useImperativeHandle:Fa,useLayoutEffect:Ia,useMemo:Va,useReducer:yl,useRef:Da,useState:i(function(){return yl(xr)},"useState"),useDebugValue:Bs,useResponder:Ds,useDeferredValue:i(function(e,t){var n=yl(xr),o=n[0],s=n[1];return xl(function(){var f=Ut.suspense;Ut.suspense=t===void 0?null:t;try{s(e)}finally{Ut.suspense=f}},[e,t]),o},"useDeferredValue"),useTransition:i(function(e){var t=yl(xr),n=t[0];return t=t[1],[El(zs.bind(null,t,e),[t,e]),n]},"useTransition")},Ou={readContext:Ge,useCallback:El,useContext:Ge,useEffect:xl,useImperativeHandle:Fa,useLayoutEffect:Ia,useMemo:Va,useReducer:wl,useRef:Da,useState:i(function(){return wl(xr)},"useState"),useDebugValue:Bs,useResponder:Ds,useDeferredValue:i(function(e,t){var n=wl(xr),o=n[0],s=n[1];return xl(function(){var f=Ut.suspense;Ut.suspense=t===void 0?null:t;try{s(e)}finally{Ut.suspense=f}},[e,t]),o},"useDeferredValue"),useTransition:i(function(e){var t=wl(xr),n=t[0];return t=t[1],[El(zs.bind(null,t,e),[t,e]),n]},"useTransition")},kn=null,Kn=null,Er=!1;function za(e,t){var n=pn(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}i(za,"Rh");function ja(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}i(ja,"Th");function js(e){if(Er){var t=Kn;if(t){var n=t;if(!ja(e,t)){if(t=Fn(n.nextSibling),!t||!ja(e,t)){e.effectTag=e.effectTag&-1025|2,Er=!1,kn=e;return}za(kn,n)}kn=e,Kn=Fn(t.firstChild)}else e.effectTag=e.effectTag&-1025|2,Er=!1,kn=e}}i(js,"Uh");function Ua(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kn=e}i(Ua,"Vh");function kl(e){if(e!==kn)return!1;if(!Er)return Ua(e),Er=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!zo(t,e.memoizedProps))for(t=Kn;t;)za(e,t),t=Fn(t.nextSibling);if(Ua(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===Hn){if(t===0){Kn=Fn(e.nextSibling);break e}t--}else n!==zi&&n!==$o&&n!==ar||t++}e=e.nextSibling}Kn=null}}else Kn=kn?Fn(e.stateNode.nextSibling):null;return!0}i(kl,"Wh");function Us(){Kn=kn=null,Er=!1}i(Us,"Xh");var Du=Ot.ReactCurrentOwner,dn=!1;function Ft(e,t,n,o){t.child=e===null?Rs(t,null,n,o):uo(t,e.child,n,o)}i(Ft,"R");function Wa(e,t,n,o,s){n=n.render;var f=t.ref;return ot(t,s),o=Is(e,t,n,o,f,s),e!==null&&!dn?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=s&&(e.expirationTime=0),_n(e,t,s)):(t.effectTag|=1,Ft(e,t,o,s),t.child)}i(Wa,"Zh");function Za(e,t,n,o,s,f){if(e===null){var m=n.type;return typeof m=="function"&&!ca(m)&&m.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=m,qa(e,t,m,o,s,f)):(e=$l(n.type,null,o,null,t.mode,f),e.ref=t.ref,e.return=t,t.child=e)}return m=e.child,s<f&&(s=m.memoizedProps,n=n.compare,n=n!==null?n:vr,n(s,o)&&e.ref===t.ref)?_n(e,t,f):(t.effectTag|=1,e=Lr(m,o),e.ref=t.ref,e.return=t,t.child=e)}i(Za,"ai");function qa(e,t,n,o,s,f){return e!==null&&vr(e.memoizedProps,o)&&e.ref===t.ref&&(dn=!1,s<f)?(t.expirationTime=e.expirationTime,_n(e,t,f)):Ws(e,t,n,o,f)}i(qa,"ci");function Qa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.effectTag|=128)}i(Qa,"ei");function Ws(e,t,n,o,s){var f=St(n)?ln:ft.current;return f=Un(t,f),ot(t,s),n=Is(e,t,n,o,f,s),e!==null&&!dn?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=s&&(e.expirationTime=0),_n(e,t,s)):(t.effectTag|=1,Ft(e,t,n,s),t.child)}i(Ws,"di");function Ka(e,t,n,o,s){if(St(n)){var f=!0;Zn(t)}else f=!1;if(ot(t,s),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),Na(t,n,o),Ns(t,n,o,s),o=!0;else if(e===null){var m=t.stateNode,g=t.memoizedProps;m.props=g;var S=m.context,M=n.contextType;typeof M=="object"&&M!==null?M=Ge(M):(M=St(n)?ln:ft.current,M=Un(t,M));var re=n.getDerivedStateFromProps,le=typeof re=="function"||typeof m.getSnapshotBeforeUpdate=="function";le||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(g!==o||S!==M)&&Ra(t,m,o,M),It=!1;var Ae=t.memoizedState;m.state=Ae,ri(t,o,m,s),S=t.memoizedState,g!==o||Ae!==S||_t.current||It?(typeof re=="function"&&(fl(t,n,re,o),S=t.memoizedState),(g=It||La(t,n,g,o,Ae,S,M))?(le||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(t.effectTag|=4)):(typeof m.componentDidMount=="function"&&(t.effectTag|=4),t.memoizedProps=o,t.memoizedState=S),m.props=o,m.state=S,m.context=M,o=g):(typeof m.componentDidMount=="function"&&(t.effectTag|=4),o=!1)}else m=t.stateNode,Rt(e,t),g=t.memoizedProps,m.props=t.type===t.elementType?g:Ee(t.type,g),S=m.context,M=n.contextType,typeof M=="object"&&M!==null?M=Ge(M):(M=St(n)?ln:ft.current,M=Un(t,M)),re=n.getDerivedStateFromProps,(le=typeof re=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(g!==o||S!==M)&&Ra(t,m,o,M),It=!1,S=t.memoizedState,m.state=S,ri(t,o,m,s),Ae=t.memoizedState,g!==o||S!==Ae||_t.current||It?(typeof re=="function"&&(fl(t,n,re,o),Ae=t.memoizedState),(re=It||La(t,n,g,o,S,Ae,M))?(le||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,Ae,M),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,Ae,M)),typeof m.componentDidUpdate=="function"&&(t.effectTag|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(t.effectTag|=256)):(typeof m.componentDidUpdate!="function"||g===e.memoizedProps&&S===e.memoizedState||(t.effectTag|=4),typeof m.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&S===e.memoizedState||(t.effectTag|=256),t.memoizedProps=o,t.memoizedState=Ae),m.props=o,m.state=Ae,m.context=M,o=re):(typeof m.componentDidUpdate!="function"||g===e.memoizedProps&&S===e.memoizedState||(t.effectTag|=4),typeof m.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&S===e.memoizedState||(t.effectTag|=256),o=!1);return Zs(e,t,n,o,f,s)}i(Ka,"fi");function Zs(e,t,n,o,s,f){Qa(e,t);var m=(t.effectTag&64)!==0;if(!o&&!m)return s&&io(t,n,!1),_n(e,t,f);o=t.stateNode,Du.current=t;var g=m&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.effectTag|=1,e!==null&&m?(t.child=uo(t,e.child,null,f),t.child=uo(t,null,g,f)):Ft(e,t,g,f),t.memoizedState=o.state,s&&io(t,n,!0),t.child}i(Zs,"gi");function Ya(e){var t=e.stateNode;t.pendingContext?ro(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ro(e,t.context,!1),Ps(e,t.containerInfo)}i(Ya,"hi");var qs={dehydrated:null,retryTime:0};function Ga(e,t,n){var o=t.mode,s=t.pendingProps,f=it.current,m=!1,g;if((g=(t.effectTag&64)!==0)||(g=(f&2)!==0&&(e===null||e.memoizedState!==null)),g?(m=!0,t.effectTag&=-65):e!==null&&e.memoizedState===null||s.fallback===void 0||s.unstable_avoidThisFallback===!0||(f|=1),nt(it,f&1),e===null){if(s.fallback!==void 0&&js(t),m){if(m=s.fallback,s=Xn(null,o,0,null),s.return=t,!(t.mode&2))for(e=t.memoizedState!==null?t.child.child:t.child,s.child=e;e!==null;)e.return=s,e=e.sibling;return n=Xn(m,o,n,null),n.return=t,s.sibling=n,t.memoizedState=qs,t.child=s,n}return o=s.children,t.memoizedState=null,t.child=Rs(t,null,o,n)}if(e.memoizedState!==null){if(e=e.child,o=e.sibling,m){if(s=s.fallback,n=Lr(e,e.pendingProps),n.return=t,!(t.mode&2)&&(m=t.memoizedState!==null?t.child.child:t.child,m!==e.child))for(n.child=m;m!==null;)m.return=n,m=m.sibling;return o=Lr(o,s),o.return=t,n.sibling=o,n.childExpirationTime=0,t.memoizedState=qs,t.child=n,o}return n=uo(t,e.child,s.children,n),t.memoizedState=null,t.child=n}if(e=e.child,m){if(m=s.fallback,s=Xn(null,o,0,null),s.return=t,s.child=e,e!==null&&(e.return=s),!(t.mode&2))for(e=t.memoizedState!==null?t.child.child:t.child,s.child=e;e!==null;)e.return=s,e=e.sibling;return n=Xn(m,o,n,null),n.return=t,s.sibling=n,n.effectTag|=2,s.childExpirationTime=0,t.memoizedState=qs,t.child=s,n}return t.memoizedState=null,t.child=uo(t,e,s.children,n)}i(Ga,"ji");function Xa(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t),bn(e.return,t)}i(Xa,"ki");function Qs(e,t,n,o,s,f){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailExpiration:0,tailMode:s,lastEffect:f}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=o,m.tail=n,m.tailExpiration=0,m.tailMode=s,m.lastEffect=f)}i(Qs,"li");function Ja(e,t,n){var o=t.pendingProps,s=o.revealOrder,f=o.tail;if(Ft(e,t,o.children,n),o=it.current,o&2)o=o&1|2,t.effectTag|=64;else{if(e!==null&&e.effectTag&64)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xa(e,n);else if(e.tag===19)Xa(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(nt(it,o),!(t.mode&2))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&gl(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Qs(t,!1,s,n,f,t.lastEffect);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&gl(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Qs(t,!0,n,null,f,t.lastEffect);break;case"together":Qs(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}i(Ja,"mi");function _n(e,t,n){e!==null&&(t.dependencies=e.dependencies);var o=t.expirationTime;if(o!==0&&Fl(o),t.childExpirationTime<n)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Lr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Lr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}i(_n,"$h");var eu,Ks,tu,nu;eu=i(function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},"ni"),Ks=i(function(){},"oi"),tu=i(function(e,t,n,o,s){var f=e.memoizedProps;if(f!==o){var m=t.stateNode;switch(wr(cn.current),e=null,n){case"input":f=Eo(m,f),o=Eo(m,o),e=[];break;case"option":f=bo(m,f),o=bo(m,o),e=[];break;case"select":f=T({},f,{value:void 0}),o=T({},o,{value:void 0}),e=[];break;case"textarea":f=Dr(m,f),o=Dr(m,o),e=[];break;default:typeof f.onClick!="function"&&typeof o.onClick=="function"&&(m.onclick=In)}Ao(n,o);var g,S;n=null;for(g in f)if(!o.hasOwnProperty(g)&&f.hasOwnProperty(g)&&f[g]!=null)if(g==="style")for(S in m=f[g],m)m.hasOwnProperty(S)&&(n||(n={}),n[S]="");else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(F.hasOwnProperty(g)?e||(e=[]):(e=e||[]).push(g,null));for(g in o){var M=o[g];if(m=f!=null?f[g]:void 0,o.hasOwnProperty(g)&&M!==m&&(M!=null||m!=null))if(g==="style")if(m){for(S in m)!m.hasOwnProperty(S)||M&&M.hasOwnProperty(S)||(n||(n={}),n[S]="");for(S in M)M.hasOwnProperty(S)&&m[S]!==M[S]&&(n||(n={}),n[S]=M[S])}else n||(e||(e=[]),e.push(g,n)),n=M;else g==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,m=m?m.__html:void 0,M!=null&&m!==M&&(e=e||[]).push(g,M)):g==="children"?m===M||typeof M!="string"&&typeof M!="number"||(e=e||[]).push(g,""+M):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(F.hasOwnProperty(g)?(M!=null&&jt(s,g),e||m===M||(e=[])):(e=e||[]).push(g,M))}n&&(e=e||[]).push("style",n),s=e,(t.updateQueue=s)&&(t.effectTag|=4)}},"pi"),nu=i(function(e,t,n,o){n!==o&&(t.effectTag|=4)},"qi");function _l(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}i(_l,"ri");function Au(e,t,n){var o=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return St(t.type)&&Wn(),null;case 3:return co(),Ye(_t),Ye(ft),n=t.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),e!==null&&e.child!==null||!kl(t)||(t.effectTag|=4),Ks(t),null;case 5:Os(t),n=wr(ai.current);var s=t.type;if(e!==null&&t.stateNode!=null)tu(e,t,s,o,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!o){if(t.stateNode===null)throw Error(h(166));return null}if(e=wr(cn.current),kl(t)){o=t.stateNode,s=t.type;var f=t.memoizedProps;switch(o[Jt]=t,o[qr]=f,s){case"iframe":case"object":case"embed":Ke("load",o);break;case"video":case"audio":for(e=0;e<Rn.length;e++)Ke(Rn[e],o);break;case"source":Ke("error",o);break;case"img":case"image":case"link":Ke("error",o),Ke("load",o);break;case"form":Ke("reset",o),Ke("submit",o);break;case"details":Ke("toggle",o);break;case"input":bi(o,f),Ke("invalid",o),jt(n,"onChange");break;case"select":o._wrapperState={wasMultiple:!!f.multiple},Ke("invalid",o),jt(n,"onChange");break;case"textarea":Ar(o,f),Ke("invalid",o),jt(n,"onChange")}Ao(s,f),e=null;for(var m in f)if(f.hasOwnProperty(m)){var g=f[m];m==="children"?typeof g=="string"?o.textContent!==g&&(e=["children",g]):typeof g=="number"&&o.textContent!==""+g&&(e=["children",""+g]):F.hasOwnProperty(m)&&g!=null&&jt(n,m)}switch(s){case"input":wo(o),Zl(o,f,!0);break;case"textarea":wo(o),Mi(o);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(o.onclick=In)}n=e,t.updateQueue=n,n!==null&&(t.effectTag|=4)}else{switch(m=n.nodeType===9?n:n.ownerDocument,e===Ho&&(e=Ql(s)),e===Ho?s==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=m.createElement(s,{is:o.is}):(e=m.createElement(s),s==="select"&&(m=e,o.multiple?m.multiple=!0:o.size&&(m.size=o.size))):e=m.createElementNS(e,s),e[Jt]=t,e[qr]=o,eu(e,t,!1,!1),t.stateNode=e,m=Io(s,o),s){case"iframe":case"object":case"embed":Ke("load",e),g=o;break;case"video":case"audio":for(g=0;g<Rn.length;g++)Ke(Rn[g],e);g=o;break;case"source":Ke("error",e),g=o;break;case"img":case"image":case"link":Ke("error",e),Ke("load",e),g=o;break;case"form":Ke("reset",e),Ke("submit",e),g=o;break;case"details":Ke("toggle",e),g=o;break;case"input":bi(e,o),g=Eo(e,o),Ke("invalid",e),jt(n,"onChange");break;case"option":g=bo(e,o);break;case"select":e._wrapperState={wasMultiple:!!o.multiple},g=T({},o,{value:void 0}),Ke("invalid",e),jt(n,"onChange");break;case"textarea":Ar(e,o),g=Dr(e,o),Ke("invalid",e),jt(n,"onChange");break;default:g=o}Ao(s,g);var S=g;for(f in S)if(S.hasOwnProperty(f)){var M=S[f];f==="style"?Fi(e,M):f==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,M!=null&&vn(e,M)):f==="children"?typeof M=="string"?(s!=="textarea"||M!=="")&&Ln(e,M):typeof M=="number"&&Ln(e,""+M):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(F.hasOwnProperty(f)?M!=null&&jt(n,f):M!=null&&ho(e,f,M,m))}switch(s){case"input":wo(e),Zl(e,o,!1);break;case"textarea":wo(e),Mi(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Gt(o.value));break;case"select":e.multiple=!!o.multiple,n=o.value,n!=null?tr(e,!!o.multiple,n,!1):o.defaultValue!=null&&tr(e,!!o.multiple,o.defaultValue,!0);break;default:typeof g.onClick=="function"&&(e.onclick=In)}ji(s,o)&&(t.effectTag|=4)}t.ref!==null&&(t.effectTag|=128)}return null;case 6:if(e&&t.stateNode!=null)nu(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(h(166));n=wr(ai.current),wr(cn.current),kl(t)?(n=t.stateNode,o=t.memoizedProps,n[Jt]=t,n.nodeValue!==o&&(t.effectTag|=4)):(n=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),n[Jt]=t,t.stateNode=n)}return null;case 13:return Ye(it),o=t.memoizedState,t.effectTag&64?(t.expirationTime=n,t):(n=o!==null,o=!1,e===null?t.memoizedProps.fallback!==void 0&&kl(t):(s=e.memoizedState,o=s!==null,n||s===null||(s=e.child.sibling,s!==null&&(f=t.firstEffect,f!==null?(t.firstEffect=s,s.nextEffect=f):(t.firstEffect=t.lastEffect=s,s.nextEffect=null),s.effectTag=8))),n&&!o&&t.mode&2&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||it.current&1?ht===br&&(ht=Tl):((ht===br||ht===Tl)&&(ht=Ll),ci!==0&&$t!==null&&(Nr($t,Pt),Tu($t,ci)))),(n||o)&&(t.effectTag|=4),null);case 4:return co(),Ks(t),null;case 10:return mt(t),null;case 17:return St(t.type)&&Wn(),null;case 19:if(Ye(it),o=t.memoizedState,o===null)return null;if(s=(t.effectTag&64)!==0,f=o.rendering,f===null){if(s)_l(o,!1);else if(ht!==br||e!==null&&e.effectTag&64)for(f=t.child;f!==null;){if(e=gl(f),e!==null){for(t.effectTag|=64,_l(o,!1),s=e.updateQueue,s!==null&&(t.updateQueue=s,t.effectTag|=4),o.lastEffect===null&&(t.firstEffect=null),t.lastEffect=o.lastEffect,o=t.child;o!==null;)s=o,f=n,s.effectTag&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,e=s.alternate,e===null?(s.childExpirationTime=0,s.expirationTime=f,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null):(s.childExpirationTime=e.childExpirationTime,s.expirationTime=e.expirationTime,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,f=e.dependencies,s.dependencies=f===null?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),o=o.sibling;return nt(it,it.current&1|2),t.child}f=f.sibling}}else{if(!s)if(e=gl(f),e!==null){if(t.effectTag|=64,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.effectTag|=4),_l(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate)return t=t.lastEffect=o.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*L()-o.renderingStartTime>o.tailExpiration&&1<n&&(t.effectTag|=64,s=!0,_l(o,!1),t.expirationTime=t.childExpirationTime=n-1);o.isBackwards?(f.sibling=t.child,t.child=f):(n=o.last,n!==null?n.sibling=f:t.child=f,o.last=f)}return o.tail!==null?(o.tailExpiration===0&&(o.tailExpiration=L()+500),n=o.tail,o.rendering=n,o.tail=n.sibling,o.lastEffect=t.lastEffect,o.renderingStartTime=L(),n.sibling=null,t=it.current,nt(it,s?t&1|2:t&1),n):null}throw Error(h(156,t.tag))}i(Au,"si");function Iu(e){switch(e.tag){case 1:St(e.type)&&Wn();var t=e.effectTag;return t&4096?(e.effectTag=t&-4097|64,e):null;case 3:if(co(),Ye(_t),Ye(ft),t=e.effectTag,t&64)throw Error(h(285));return e.effectTag=t&-4097|64,e;case 5:return Os(e),null;case 13:return Ye(it),t=e.effectTag,t&4096?(e.effectTag=t&-4097|64,e):null;case 19:return Ye(it),null;case 4:return co(),null;case 10:return mt(e),null;default:return null}}i(Iu,"zi");function Ys(e,t){return{value:e,source:t,stack:Or(t)}}i(Ys,"Ai");var Hu=typeof WeakSet=="function"?WeakSet:Set;function Gs(e,t){var n=t.source,o=t.stack;o===null&&n!==null&&(o=Or(n)),n!==null&&Zt(n.type),t=t.value,e!==null&&e.tag===1&&Zt(e.type);try{console.error(t)}catch(s){setTimeout(function(){throw s})}}i(Gs,"Ci");function Fu(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(n){Tr(e,n)}}i(Fu,"Di");function ru(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Tr(e,n)}else t.current=null}i(ru,"Fi");function $u(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.effectTag&256&&e!==null){var n=e.memoizedProps,o=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:Ee(t.type,n),o),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(h(163))}i($u,"Gi");function ou(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.destroy;n.destroy=void 0,o!==void 0&&o()}n=n.next}while(n!==t)}}i(ou,"Hi");function iu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}i(iu,"Ii");function Vu(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:iu(3,n);return;case 1:if(e=n.stateNode,n.effectTag&4)if(t===null)e.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Ee(n.type,t.memoizedProps);e.componentDidUpdate(o,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}t=n.updateQueue,t!==null&&Ma(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Ma(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.effectTag&4&&ji(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&zr(n))));return;case 19:case 17:case 20:case 21:return}throw Error(h(163))}i(Vu,"Ji");function lu(e,t,n){switch(typeof ua=="function"&&ua(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var o=e.next;ee(97<n?97:n,function(){var s=o;do{var f=s.destroy;if(f!==void 0){var m=t;try{f()}catch(g){Tr(m,g)}}s=s.next}while(s!==o)})}break;case 1:ru(t),n=t.stateNode,typeof n.componentWillUnmount=="function"&&Fu(t,n);break;case 5:ru(t);break;case 4:cu(e,t,n)}}i(lu,"Ki");function su(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,t!==null&&su(t)}i(su,"Ni");function au(e){return e.tag===5||e.tag===3||e.tag===4}i(au,"Oi");function uu(e){e:{for(var t=e.return;t!==null;){if(au(t)){var n=t;break e}t=t.return}throw Error(h(160))}switch(t=n.stateNode,n.tag){case 5:var o=!1;break;case 3:t=t.containerInfo,o=!0;break;case 4:t=t.containerInfo,o=!0;break;default:throw Error(h(161))}n.effectTag&16&&(Ln(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||au(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.effectTag&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.effectTag&2)){n=n.stateNode;break e}}o?Xs(e,n,t):Js(e,n,t)}i(uu,"Pi");function Xs(e,t,n){var o=e.tag,s=o===5||o===6;if(s)e=s?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=In));else if(o!==4&&(e=e.child,e!==null))for(Xs(e,t,n),e=e.sibling;e!==null;)Xs(e,t,n),e=e.sibling}i(Xs,"Qi");function Js(e,t,n){var o=e.tag,s=o===5||o===6;if(s)e=s?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Js(e,t,n),e=e.sibling;e!==null;)Js(e,t,n),e=e.sibling}i(Js,"Ri");function cu(e,t,n){for(var o=t,s=!1,f,m;;){if(!s){s=o.return;e:for(;;){if(s===null)throw Error(h(160));switch(f=s.stateNode,s.tag){case 5:m=!1;break e;case 3:f=f.containerInfo,m=!0;break e;case 4:f=f.containerInfo,m=!0;break e}s=s.return}s=!0}if(o.tag===5||o.tag===6){e:for(var g=e,S=o,M=n,re=S;;)if(lu(g,re,M),re.child!==null&&re.tag!==4)re.child.return=re,re=re.child;else{if(re===S)break e;for(;re.sibling===null;){if(re.return===null||re.return===S)break e;re=re.return}re.sibling.return=re.return,re=re.sibling}m?(g=f,S=o.stateNode,g.nodeType===8?g.parentNode.removeChild(S):g.removeChild(S)):f.removeChild(o.stateNode)}else if(o.tag===4){if(o.child!==null){f=o.stateNode.containerInfo,m=!0,o.child.return=o,o=o.child;continue}}else if(lu(e,o,n),o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return,o.tag===4&&(s=!1)}o.sibling.return=o.return,o=o.sibling}}i(cu,"Mi");function ea(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:ou(3,t);return;case 1:return;case 5:var n=t.stateNode;if(n!=null){var o=t.memoizedProps,s=e!==null?e.memoizedProps:o;e=t.type;var f=t.updateQueue;if(t.updateQueue=null,f!==null){for(n[qr]=o,e==="input"&&o.type==="radio"&&o.name!=null&&et(n,o),Io(e,s),t=Io(e,o),s=0;s<f.length;s+=2){var m=f[s],g=f[s+1];m==="style"?Fi(n,g):m==="dangerouslySetInnerHTML"?vn(n,g):m==="children"?Ln(n,g):ho(n,m,g,t)}switch(e){case"input":ki(n,o);break;case"textarea":Si(n,o);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!o.multiple,e=o.value,e!=null?tr(n,!!o.multiple,e,!1):t!==!!o.multiple&&(o.defaultValue!=null?tr(n,!!o.multiple,o.defaultValue,!0):tr(n,!!o.multiple,o.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(h(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:t=t.stateNode,t.hydrate&&(t.hydrate=!1,zr(t.containerInfo));return;case 12:return;case 13:if(n=t,t.memoizedState===null?o=!1:(o=!0,n=t.child,ra=L()),n!==null)e:for(e=n;;){if(e.tag===5)f=e.stateNode,o?(f=f.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(f=e.stateNode,s=e.memoizedProps.style,s=s!=null&&s.hasOwnProperty("display")?s.display:null,f.style.display=Do("display",s));else if(e.tag===6)e.stateNode.nodeValue=o?"":e.memoizedProps;else if(e.tag===13&&e.memoizedState!==null&&e.memoizedState.dehydrated===null){f=e.child.sibling,f.return=e,e=f;continue}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}du(t);return;case 19:du(t);return;case 17:return}throw Error(h(163))}i(ea,"Si");function du(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hu),t.forEach(function(o){var s=Yu.bind(null,e,o);n.has(o)||(n.add(o),o.then(s,s))})}}i(du,"Ui");var Bu=typeof WeakMap=="function"?WeakMap:Map;function fu(e,t,n){n=Kt(n,null),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Ol||(Ol=!0,oa=o),Gs(e,t)},n}i(fu,"Xi");function mu(e,t,n){n=Kt(n,null),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=t.value;n.payload=function(){return Gs(e,t),o(s)}}var f=e.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(n.callback=function(){typeof o!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this),Gs(e,t));var m=t.stack;this.componentDidCatch(t.value,{componentStack:m!==null?m:""})}),n}i(mu,"$i");var zu=Math.ceil,Sl=Ot.ReactCurrentDispatcher,pu=Ot.ReactCurrentOwner,pt=0,ta=8,Yt=16,fn=32,br=0,Ml=1,hu=2,Tl=3,Ll=4,na=5,be=pt,$t=null,Le=null,Pt=0,ht=br,Nl=null,Sn=1073741823,ui=1073741823,Rl=null,ci=0,Pl=!1,ra=0,gu=500,de=null,Ol=!1,oa=null,Yn=null,Dl=!1,di=null,fi=90,kr=null,mi=0,ia=null,Al=0;function mn(){return(be&(Yt|fn))!==pt?1073741821-(L()/10|0):Al!==0?Al:Al=1073741821-(L()/10|0)}i(mn,"Gg");function _r(e,t,n){if(t=t.mode,!(t&2))return 1073741823;var o=Q();if(!(t&4))return o===99?1073741823:1073741822;if((be&Yt)!==pt)return Pt;if(n!==null)e=Se(e,n.timeoutMs|0||5e3,250);else switch(o){case 99:e=1073741823;break;case 98:e=Se(e,150,100);break;case 97:case 96:e=Se(e,5e3,250);break;case 95:e=2;break;default:throw Error(h(326))}return $t!==null&&e===Pt&&--e,e}i(_r,"Hg");function Gn(e,t){if(50<mi)throw mi=0,ia=null,Error(h(185));if(e=Il(e,t),e!==null){var n=Q();t===1073741823?(be&ta)!==pt&&(be&(Yt|fn))===pt?la(e):(Vt(e),be===pt&&we()):Vt(e),(be&4)===pt||n!==98&&n!==99||(kr===null?kr=new Map([[e,t]]):(n=kr.get(e),(n===void 0||n>t)&&kr.set(e,t)))}}i(Gn,"Ig");function Il(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t);var o=e.return,s=null;if(o===null&&e.tag===3)s=e.stateNode;else for(;o!==null;){if(n=o.alternate,o.childExpirationTime<t&&(o.childExpirationTime=t),n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t),o.return===null&&o.tag===3){s=o.stateNode;break}o=o.return}return s!==null&&($t===s&&(Fl(t),ht===Ll&&Nr(s,Pt)),Tu(s,t)),s}i(Il,"xj");function Hl(e){var t=e.lastExpiredTime;if(t!==0||(t=e.firstPendingTime,!Mu(e,t)))return t;var n=e.lastPingedTime;return e=e.nextKnownPendingLevel,e=n>e?n:e,2>=e&&t!==e?0:e}i(Hl,"zj");function Vt(e){if(e.lastExpiredTime!==0)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=z(la.bind(null,e));else{var t=Hl(e),n=e.callbackNode;if(t===0)n!==null&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var o=mn();if(t===1073741823?o=99:t===1||t===2?o=95:(o=10*(1073741821-t)-10*(1073741821-o),o=0>=o?99:250>=o?98:5250>=o?97:95),n!==null){var s=e.callbackPriority;if(e.callbackExpirationTime===t&&s>=o)return;n!==u&&sn(n)}e.callbackExpirationTime=t,e.callbackPriority=o,t=t===1073741823?z(la.bind(null,e)):me(o,vu.bind(null,e),{timeout:10*(1073741821-t)-L()}),e.callbackNode=t}}}i(Vt,"Z");function vu(e,t){if(Al=0,t)return t=mn(),ma(e,t),Vt(e),null;var n=Hl(e);if(n!==0){if(t=e.callbackNode,(be&(Yt|fn))!==pt)throw Error(h(327));if(po(),e===$t&&n===Pt||Sr(e,n),Le!==null){var o=be;be|=Yt;var s=xu();do try{Wu();break}catch(g){wu(e,g)}while(!0);if(Ze(),be=o,Sl.current=s,ht===Ml)throw t=Nl,Sr(e,n),Nr(e,n),Vt(e),t;if(Le===null)switch(s=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,o=ht,$t=null,o){case br:case Ml:throw Error(h(345));case hu:ma(e,2<n?2:n);break;case Tl:if(Nr(e,n),o=e.lastSuspendedTime,n===o&&(e.nextKnownPendingLevel=sa(s)),Sn===1073741823&&(s=ra+gu-L(),10<s)){if(Pl){var f=e.lastPingedTime;if(f===0||f>=n){e.lastPingedTime=n,Sr(e,n);break}}if(f=Hl(e),f!==0&&f!==n)break;if(o!==0&&o!==n){e.lastPingedTime=o;break}e.timeoutHandle=jo(Mr.bind(null,e),s);break}Mr(e);break;case Ll:if(Nr(e,n),o=e.lastSuspendedTime,n===o&&(e.nextKnownPendingLevel=sa(s)),Pl&&(s=e.lastPingedTime,s===0||s>=n)){e.lastPingedTime=n,Sr(e,n);break}if(s=Hl(e),s!==0&&s!==n)break;if(o!==0&&o!==n){e.lastPingedTime=o;break}if(ui!==1073741823?o=10*(1073741821-ui)-L():Sn===1073741823?o=0:(o=10*(1073741821-Sn)-5e3,s=L(),n=10*(1073741821-n)-s,o=s-o,0>o&&(o=0),o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*zu(o/1960))-o,n<o&&(o=n)),10<o){e.timeoutHandle=jo(Mr.bind(null,e),o);break}Mr(e);break;case na:if(Sn!==1073741823&&Rl!==null){f=Sn;var m=Rl;if(o=m.busyMinDurationMs|0,0>=o?o=0:(s=m.busyDelayMs|0,f=L()-(10*(1073741821-f)-(m.timeoutMs|0||5e3)),o=f<=s?0:s+o-f),10<o){Nr(e,n),e.timeoutHandle=jo(Mr.bind(null,e),o);break}}Mr(e);break;default:throw Error(h(329))}if(Vt(e),e.callbackNode===t)return vu.bind(null,e)}}return null}i(vu,"Bj");function la(e){var t=e.lastExpiredTime;if(t=t!==0?t:1073741823,(be&(Yt|fn))!==pt)throw Error(h(327));if(po(),e===$t&&t===Pt||Sr(e,t),Le!==null){var n=be;be|=Yt;var o=xu();do try{Uu();break}catch(s){wu(e,s)}while(!0);if(Ze(),be=n,Sl.current=o,ht===Ml)throw n=Nl,Sr(e,t),Nr(e,t),Vt(e),n;if(Le!==null)throw Error(h(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,$t=null,Mr(e),Vt(e)}return null}i(la,"yj");function ju(){if(kr!==null){var e=kr;kr=null,e.forEach(function(t,n){ma(n,t),Vt(n)}),we()}}i(ju,"Lj");function Cu(e,t){var n=be;be|=1;try{return e(t)}finally{be=n,be===pt&&we()}}i(Cu,"Mj");function yu(e,t){var n=be;be&=-2,be|=ta;try{return e(t)}finally{be=n,be===pt&&we()}}i(yu,"Nj");function Sr(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,is(n)),Le!==null)for(n=Le.return;n!==null;){var o=n;switch(o.tag){case 1:o=o.type.childContextTypes,o!=null&&Wn();break;case 3:co(),Ye(_t),Ye(ft);break;case 5:Os(o);break;case 4:co();break;case 13:Ye(it);break;case 19:Ye(it);break;case 10:mt(o)}n=n.return}$t=e,Le=Lr(e.current,null),Pt=t,ht=br,Nl=null,ui=Sn=1073741823,Rl=null,ci=0,Pl=!1}i(Sr,"Ej");function wu(e,t){do{try{if(Ze(),vl.current=bl,Cl)for(var n=ut.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}if(Qn=0,Tt=Mt=ut=null,Cl=!1,Le===null||Le.return===null)return ht=Ml,Nl=t,Le=null;e:{var s=e,f=Le.return,m=Le,g=t;if(t=Pt,m.effectTag|=2048,m.firstEffect=m.lastEffect=null,g!==null&&typeof g=="object"&&typeof g.then=="function"){var S=g;if(!(m.mode&2)){var M=m.alternate;M?(m.updateQueue=M.updateQueue,m.memoizedState=M.memoizedState,m.expirationTime=M.expirationTime):(m.updateQueue=null,m.memoizedState=null)}var re=(it.current&1)!==0,le=f;do{var Ae;if(Ae=le.tag===13){var ze=le.memoizedState;if(ze!==null)Ae=ze.dehydrated!==null;else{var Wt=le.memoizedProps;Ae=Wt.fallback===void 0?!1:Wt.unstable_avoidThisFallback!==!0?!0:!re}}if(Ae){var xt=le.updateQueue;if(xt===null){var b=new Set;b.add(S),le.updateQueue=b}else xt.add(S);if(!(le.mode&2)){if(le.effectTag|=64,m.effectTag&=-2981,m.tag===1)if(m.alternate===null)m.tag=17;else{var x=Kt(1073741823,null);x.tag=2,un(m,x)}m.expirationTime=1073741823;break e}g=void 0,m=t;var N=s.pingCache;if(N===null?(N=s.pingCache=new Bu,g=new Set,N.set(S,g)):(g=N.get(S),g===void 0&&(g=new Set,N.set(S,g))),!g.has(m)){g.add(m);var Z=Ku.bind(null,s,S,m);S.then(Z,Z)}le.effectTag|=4096,le.expirationTime=t;break e}le=le.return}while(le!==null);g=Error((Zt(m.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`+Or(m))}ht!==na&&(ht=hu),g=Ys(g,m),le=f;do{switch(le.tag){case 3:S=g,le.effectTag|=4096,le.expirationTime=t;var J=fu(le,S,t);Sa(le,J);break e;case 1:S=g;var se=le.type,ye=le.stateNode;if(!(le.effectTag&64)&&(typeof se.getDerivedStateFromError=="function"||ye!==null&&typeof ye.componentDidCatch=="function"&&(Yn===null||!Yn.has(ye)))){le.effectTag|=4096,le.expirationTime=t;var $e=mu(le,S,t);Sa(le,$e);break e}}le=le.return}while(le!==null)}Le=ku(Le)}catch(rt){t=rt;continue}break}while(!0)}i(wu,"Hj");function xu(){var e=Sl.current;return Sl.current=bl,e===null?bl:e}i(xu,"Fj");function Eu(e,t){e<Sn&&2<e&&(Sn=e),t!==null&&e<ui&&2<e&&(ui=e,Rl=t)}i(Eu,"Ag");function Fl(e){e>ci&&(ci=e)}i(Fl,"Bg");function Uu(){for(;Le!==null;)Le=bu(Le)}i(Uu,"Kj");function Wu(){for(;Le!==null&&!c();)Le=bu(Le)}i(Wu,"Gj");function bu(e){var t=Su(e.alternate,e,Pt);return e.memoizedProps=e.pendingProps,t===null&&(t=ku(e)),pu.current=null,t}i(bu,"Qj");function ku(e){Le=e;do{var t=Le.alternate;if(e=Le.return,Le.effectTag&2048){if(t=Iu(Le),t!==null)return t.effectTag&=2047,t;e!==null&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}else{if(t=Au(t,Le,Pt),Pt===1||Le.childExpirationTime!==1){for(var n=0,o=Le.child;o!==null;){var s=o.expirationTime,f=o.childExpirationTime;s>n&&(n=s),f>n&&(n=f),o=o.sibling}Le.childExpirationTime=n}if(t!==null)return t;e!==null&&!(e.effectTag&2048)&&(e.firstEffect===null&&(e.firstEffect=Le.firstEffect),Le.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=Le.firstEffect),e.lastEffect=Le.lastEffect),1<Le.effectTag&&(e.lastEffect!==null?e.lastEffect.nextEffect=Le:e.firstEffect=Le,e.lastEffect=Le))}if(t=Le.sibling,t!==null)return t;Le=e}while(Le!==null);return ht===br&&(ht=na),null}i(ku,"Pj");function sa(e){var t=e.expirationTime;return e=e.childExpirationTime,t>e?t:e}i(sa,"Ij");function Mr(e){var t=Q();return ee(99,Zu.bind(null,e,t)),null}i(Mr,"Jj");function Zu(e,t){do po();while(di!==null);if((be&(Yt|fn))!==pt)throw Error(h(327));var n=e.finishedWork,o=e.finishedExpirationTime;if(n===null)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var s=sa(n);if(e.firstPendingTime=s,o<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:o<=e.firstSuspendedTime&&(e.firstSuspendedTime=o-1),o<=e.lastPingedTime&&(e.lastPingedTime=0),o<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===$t&&(Le=$t=null,Pt=0),1<n.effectTag?n.lastEffect!==null?(n.lastEffect.nextEffect=n,s=n.firstEffect):s=n:s=n.firstEffect,s!==null){var f=be;be|=fn,pu.current=null,Vo=Ur;var m=Vi();if(Bi(m)){if("selectionStart"in m)var g={start:m.selectionStart,end:m.selectionEnd};else e:{g=(g=m.ownerDocument)&&g.defaultView||window;var S=g.getSelection&&g.getSelection();if(S&&S.rangeCount!==0){g=S.anchorNode;var M=S.anchorOffset,re=S.focusNode;S=S.focusOffset;try{g.nodeType,re.nodeType}catch{g=null;break e}var le=0,Ae=-1,ze=-1,Wt=0,xt=0,b=m,x=null;t:for(;;){for(var N;b!==g||M!==0&&b.nodeType!==3||(Ae=le+M),b!==re||S!==0&&b.nodeType!==3||(ze=le+S),b.nodeType===3&&(le+=b.nodeValue.length),(N=b.firstChild)!==null;)x=b,b=N;for(;;){if(b===m)break t;if(x===g&&++Wt===M&&(Ae=le),x===re&&++xt===S&&(ze=le),(N=b.nextSibling)!==null)break;b=x,x=b.parentNode}b=N}g=Ae===-1||ze===-1?null:{start:Ae,end:ze}}else g=null}g=g||{start:0,end:0}}else g=null;Bo={activeElementDetached:null,focusedElem:m,selectionRange:g},Ur=!1,de=s;do try{qu()}catch(Re){if(de===null)throw Error(h(330));Tr(de,Re),de=de.nextEffect}while(de!==null);de=s;do try{for(m=e,g=t;de!==null;){var Z=de.effectTag;if(Z&16&&Ln(de.stateNode,""),Z&128){var J=de.alternate;if(J!==null){var se=J.ref;se!==null&&(typeof se=="function"?se(null):se.current=null)}}switch(Z&1038){case 2:uu(de),de.effectTag&=-3;break;case 6:uu(de),de.effectTag&=-3,ea(de.alternate,de);break;case 1024:de.effectTag&=-1025;break;case 1028:de.effectTag&=-1025,ea(de.alternate,de);break;case 4:ea(de.alternate,de);break;case 8:M=de,cu(m,M,g),su(M)}de=de.nextEffect}}catch(Re){if(de===null)throw Error(h(330));Tr(de,Re),de=de.nextEffect}while(de!==null);if(se=Bo,J=Vi(),Z=se.focusedElem,g=se.selectionRange,J!==Z&&Z&&Z.ownerDocument&&$i(Z.ownerDocument.documentElement,Z)){for(g!==null&&Bi(Z)&&(J=g.start,se=g.end,se===void 0&&(se=J),"selectionStart"in Z?(Z.selectionStart=J,Z.selectionEnd=Math.min(se,Z.value.length)):(se=(J=Z.ownerDocument||document)&&J.defaultView||window,se.getSelection&&(se=se.getSelection(),M=Z.textContent.length,m=Math.min(g.start,M),g=g.end===void 0?m:Math.min(g.end,M),!se.extend&&m>g&&(M=g,g=m,m=M),M=Fo(Z,m),re=Fo(Z,g),M&&re&&(se.rangeCount!==1||se.anchorNode!==M.node||se.anchorOffset!==M.offset||se.focusNode!==re.node||se.focusOffset!==re.offset)&&(J=J.createRange(),J.setStart(M.node,M.offset),se.removeAllRanges(),m>g?(se.addRange(J),se.extend(re.node,re.offset)):(J.setEnd(re.node,re.offset),se.addRange(J)))))),J=[],se=Z;se=se.parentNode;)se.nodeType===1&&J.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof Z.focus=="function"&&Z.focus(),Z=0;Z<J.length;Z++)se=J[Z],se.element.scrollLeft=se.left,se.element.scrollTop=se.top}Ur=!!Vo,Bo=Vo=null,e.current=n,de=s;do try{for(Z=e;de!==null;){var ye=de.effectTag;if(ye&36&&Vu(Z,de.alternate,de),ye&128){J=void 0;var $e=de.ref;if($e!==null){var rt=de.stateNode;switch(de.tag){case 5:J=rt;break;default:J=rt}typeof $e=="function"?$e(J):$e.current=J}}de=de.nextEffect}}catch(Re){if(de===null)throw Error(h(330));Tr(de,Re),de=de.nextEffect}while(de!==null);de=null,d(),be=f}else e.current=n;if(Dl)Dl=!1,di=e,fi=t;else for(de=s;de!==null;)t=de.nextEffect,de.nextEffect=null,de=t;if(t=e.firstPendingTime,t===0&&(Yn=null),t===1073741823?e===ia?mi++:(mi=0,ia=e):mi=0,typeof aa=="function"&&aa(n.stateNode,o),Vt(e),Ol)throw Ol=!1,e=oa,oa=null,e;return(be&ta)!==pt||we(),null}i(Zu,"Sj");function qu(){for(;de!==null;){var e=de.effectTag;e&256&&$u(de.alternate,de),!(e&512)||Dl||(Dl=!0,me(97,function(){return po(),null})),de=de.nextEffect}}i(qu,"Tj");function po(){if(fi!==90){var e=97<fi?97:fi;return fi=90,ee(e,Qu)}}i(po,"Dj");function Qu(){if(di===null)return!1;var e=di;if(di=null,(be&(Yt|fn))!==pt)throw Error(h(331));var t=be;for(be|=fn,e=e.current.firstEffect;e!==null;){try{var n=e;if(n.effectTag&512)switch(n.tag){case 0:case 11:case 15:case 22:ou(5,n),iu(5,n)}}catch(o){if(e===null)throw Error(h(330));Tr(e,o)}n=e.nextEffect,e.nextEffect=null,e=n}return be=t,we(),!0}i(Qu,"Vj");function _u(e,t,n){t=Ys(n,t),t=fu(e,t,1073741823),un(e,t),e=Il(e,1073741823),e!==null&&Vt(e)}i(_u,"Wj");function Tr(e,t){if(e.tag===3)_u(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){_u(n,e,t);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Yn===null||!Yn.has(o))){e=Ys(t,e),e=mu(n,e,1073741823),un(n,e),n=Il(n,1073741823),n!==null&&Vt(n);break}}n=n.return}}i(Tr,"Ei");function Ku(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),$t===e&&Pt===n?ht===Ll||ht===Tl&&Sn===1073741823&&L()-ra<gu?Sr(e,Pt):Pl=!0:Mu(e,n)&&(t=e.lastPingedTime,t!==0&&t<n||(e.lastPingedTime=n,Vt(e)))}i(Ku,"Oj");function Yu(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=mn(),t=_r(t,e,null)),e=Il(e,t),e!==null&&Vt(e)}i(Yu,"Vi");var Su;Su=i(function(e,t,n){var o=t.expirationTime;if(e!==null){var s=t.pendingProps;if(e.memoizedProps!==s||_t.current)dn=!0;else{if(o<n){switch(dn=!1,t.tag){case 3:Ya(t),Us();break;case 5:if(Oa(t),t.mode&4&&n!==1&&s.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:St(t.type)&&Zn(t);break;case 4:Ps(t,t.stateNode.containerInfo);break;case 10:o=t.memoizedProps.value,s=t.type._context,nt(Ne,s._currentValue),s._currentValue=o;break;case 13:if(t.memoizedState!==null)return o=t.child.childExpirationTime,o!==0&&o>=n?Ga(e,t,n):(nt(it,it.current&1),t=_n(e,t,n),t!==null?t.sibling:null);nt(it,it.current&1);break;case 19:if(o=t.childExpirationTime>=n,e.effectTag&64){if(o)return Ja(e,t,n);t.effectTag|=64}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null),nt(it,it.current),!o)return null}return _n(e,t,n)}dn=!1}}else dn=!1;switch(t.expirationTime=0,t.tag){case 2:if(o=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,s=Un(t,ft.current),ot(t,n),s=Is(null,t,o,e,s,n),t.effectTag|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(o)){var f=!0;Zn(t)}else f=!1;t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Qe(t);var m=o.getDerivedStateFromProps;typeof m=="function"&&fl(t,o,m,e),s.updater=ml,t.stateNode=s,s._reactInternalFiber=t,Ns(t,o,e,n),t=Zs(null,t,o,!0,f,n)}else t.tag=0,Ft(null,t,s,n),t=t.child;return t;case 16:e:{if(s=t.elementType,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,Ul(s),s._status!==1)throw s._result;switch(s=s._result,t.type=s,f=t.tag=Ju(s),e=Ee(s,e),f){case 0:t=Ws(null,t,s,e,n);break e;case 1:t=Ka(null,t,s,e,n);break e;case 11:t=Wa(null,t,s,e,n);break e;case 14:t=Za(null,t,s,Ee(s.type,e),o,n);break e}throw Error(h(306,s,""))}return t;case 0:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Ee(o,s),Ws(e,t,o,s,n);case 1:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Ee(o,s),Ka(e,t,o,s,n);case 3:if(Ya(t),o=t.updateQueue,e===null||o===null)throw Error(h(282));if(o=t.pendingProps,s=t.memoizedState,s=s!==null?s.element:null,Rt(e,t),ri(t,o,null,n),o=t.memoizedState.element,o===s)Us(),t=_n(e,t,n);else{if((s=t.stateNode.hydrate)&&(Kn=Fn(t.stateNode.containerInfo.firstChild),kn=t,s=Er=!0),s)for(n=Rs(t,null,o,n),t.child=n;n;)n.effectTag=n.effectTag&-3|1024,n=n.sibling;else Ft(e,t,o,n),Us();t=t.child}return t;case 5:return Oa(t),e===null&&js(t),o=t.type,s=t.pendingProps,f=e!==null?e.memoizedProps:null,m=s.children,zo(o,s)?m=null:f!==null&&zo(o,f)&&(t.effectTag|=16),Qa(e,t),t.mode&4&&n!==1&&s.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(Ft(e,t,m,n),t=t.child),t;case 6:return e===null&&js(t),null;case 13:return Ga(e,t,n);case 4:return Ps(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=uo(t,null,o,n):Ft(e,t,o,n),t.child;case 11:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Ee(o,s),Wa(e,t,o,s,n);case 7:return Ft(e,t,t.pendingProps,n),t.child;case 8:return Ft(e,t,t.pendingProps.children,n),t.child;case 12:return Ft(e,t,t.pendingProps.children,n),t.child;case 10:e:{o=t.type._context,s=t.pendingProps,m=t.memoizedProps,f=s.value;var g=t.type._context;if(nt(Ne,g._currentValue),g._currentValue=f,m!==null)if(g=m.value,f=En(g,f)?0:(typeof o._calculateChangedBits=="function"?o._calculateChangedBits(g,f):1073741823)|0,f===0){if(m.children===s.children&&!_t.current){t=_n(e,t,n);break e}}else for(g=t.child,g!==null&&(g.return=t);g!==null;){var S=g.dependencies;if(S!==null){m=g.child;for(var M=S.firstContext;M!==null;){if(M.context===o&&M.observedBits&f){g.tag===1&&(M=Kt(n,null),M.tag=2,un(g,M)),g.expirationTime<n&&(g.expirationTime=n),M=g.alternate,M!==null&&M.expirationTime<n&&(M.expirationTime=n),bn(g.return,n),S.expirationTime<n&&(S.expirationTime=n);break}M=M.next}}else m=g.tag===10&&g.type===t.type?null:g.child;if(m!==null)m.return=g;else for(m=g;m!==null;){if(m===t){m=null;break}if(g=m.sibling,g!==null){g.return=m.return,m=g;break}m=m.return}g=m}Ft(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,f=t.pendingProps,o=f.children,ot(t,n),s=Ge(s,f.unstable_observedBits),o=o(s),t.effectTag|=1,Ft(e,t,o,n),t.child;case 14:return s=t.type,f=Ee(s,t.pendingProps),f=Ee(s.type,f),Za(e,t,s,f,o,n);case 15:return qa(e,t,t.type,t.pendingProps,o,n);case 17:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Ee(o,s),e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,St(o)?(e=!0,Zn(t)):e=!1,ot(t,n),Na(t,o,s),Ns(t,o,s,n),Zs(null,t,o,!0,e,n);case 19:return Ja(e,t,n)}throw Error(h(156,t.tag))},"Rj");var aa=null,ua=null;function Gu(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);aa=i(function(o){try{t.onCommitFiberRoot(n,o,void 0,(o.current.effectTag&64)===64)}catch{}},"Uj"),ua=i(function(o){try{t.onCommitFiberUnmount(n,o)}catch{}},"Li")}catch{}return!0}i(Gu,"Yj");function Xu(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}i(Xu,"Zj");function pn(e,t,n,o){return new Xu(e,t,n,o)}i(pn,"Sh");function ca(e){return e=e.prototype,!(!e||!e.isReactComponent)}i(ca,"bi");function Ju(e){if(typeof e=="function")return ca(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vo)return 11;if(e===Tn)return 14}return 2}i(Ju,"Xj");function Lr(e,t){var n=e.alternate;return n===null?(n=pn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}i(Lr,"Sg");function $l(e,t,n,o,s,f){var m=2;if(o=e,typeof e=="function")ca(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case hn:return Xn(n.children,s,f,t);case at:m=8,s|=7;break;case vi:m=8,s|=1;break;case Rr:return e=pn(12,n,t,s|8),e.elementType=Rr,e.type=Rr,e.expirationTime=f,e;case Co:return e=pn(13,n,t,s),e.type=Co,e.elementType=Co,e.expirationTime=f,e;case yo:return e=pn(19,n,t,s),e.elementType=yo,e.expirationTime=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ci:m=10;break e;case Pr:m=9;break e;case vo:m=11;break e;case Tn:m=14;break e;case yi:m=16,o=null;break e;case wi:m=22;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=pn(m,n,t,s),t.elementType=e,t.type=o,t.expirationTime=f,t}i($l,"Ug");function Xn(e,t,n,o){return e=pn(7,e,o,t),e.expirationTime=n,e}i(Xn,"Wg");function da(e,t,n){return e=pn(6,e,null,t),e.expirationTime=n,e}i(da,"Tg");function fa(e,t,n){return t=pn(4,e.children!==null?e.children:[],e.key,t),t.expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}i(fa,"Vg");function ec(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}i(ec,"ak");function Mu(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,n!==0&&n>=t&&e<=t}i(Mu,"Aj");function Nr(e,t){var n=e.firstSuspendedTime,o=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(o>t||n===0)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}i(Nr,"xi");function Tu(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;n!==0&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}i(Tu,"yi");function ma(e,t){var n=e.lastExpiredTime;(n===0||n>t)&&(e.lastExpiredTime=t)}i(ma,"Cj");function Vl(e,t,n,o){var s=t.current,f=mn(),m=oi.suspense;f=_r(f,s,m);e:if(n){n=n._reactInternalFiber;t:{if(qt(n)!==n||n.tag!==1)throw Error(h(170));var g=n;do{switch(g.tag){case 3:g=g.stateNode.context;break t;case 1:if(St(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break t}}g=g.return}while(g!==null);throw Error(h(171))}if(n.tag===1){var S=n.type;if(St(S)){n=oo(n,S,g);break e}}n=g}else n=on;return t.context===null?t.context=n:t.pendingContext=n,t=Kt(f,m),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),un(s,t),Gn(s,f),f}i(Vl,"bk");function pa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}i(pa,"ck");function Lu(e,t){e=e.memoizedState,e!==null&&e.dehydrated!==null&&e.retryTime<t&&(e.retryTime=t)}i(Lu,"dk");function ha(e,t){Lu(e,t),(e=e.alternate)&&Lu(e,t)}i(ha,"ek");function ga(e,t,n){n=n!=null&&n.hydrate===!0;var o=new ec(e,t,n),s=pn(3,null,null,t===2?7:t===1?3:0);o.current=s,s.stateNode=o,Qe(s),e[en]=o.current,n&&t!==0&&We(e,e.nodeType===9?e:e.ownerDocument),this._internalRoot=o}i(ga,"fk"),ga.prototype.render=function(e){Vl(e,this._internalRoot,null,null)},ga.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Vl(null,e,null,function(){t[en]=null})};function pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}i(pi,"gk");function tc(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new ga(e,0,t?{hydrate:!0}:void 0)}i(tc,"hk");function Bl(e,t,n,o,s){var f=n._reactRootContainer;if(f){var m=f._internalRoot;if(typeof s=="function"){var g=s;s=i(function(){var M=pa(m);g.call(M)},"e")}Vl(t,m,e,s)}else{if(f=n._reactRootContainer=tc(n,o),m=f._internalRoot,typeof s=="function"){var S=s;s=i(function(){var M=pa(m);S.call(M)},"e")}yu(function(){Vl(t,m,e,s)})}return pa(m)}i(Bl,"ik");function nc(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}i(nc,"jk"),kt=i(function(e){if(e.tag===13){var t=Se(mn(),150,100);Gn(e,t),ha(e,t)}},"wc"),Xt=i(function(e){e.tag===13&&(Gn(e,3),ha(e,3))},"xc"),Lo=i(function(e){if(e.tag===13){var t=mn();t=_r(t,e,null),Gn(e,t),ha(e,t)}},"yc"),ce=i(function(e,t,n){switch(t){case"input":if(ki(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var s=Wo(o);if(!s)throw Error(h(90));xo(o),ki(o,s)}}}break;case"textarea":Si(e,n);break;case"select":t=n.value,t!=null&&tr(e,!!n.multiple,t,!1)}},"za"),Je=Cu,ct=i(function(e,t,n,o,s){var f=be;be|=4;try{return ee(98,e.bind(null,t,n,o,s))}finally{be=f,be===pt&&we()}},"Ga"),Et=i(function(){(be&(1|Yt|fn))===pt&&(ju(),po())},"Ha"),dt=i(function(e,t){var n=be;be|=2;try{return e(t)}finally{be=n,be===pt&&we()}},"Ia");function Nu(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pi(t))throw Error(h(200));return nc(e,t,null,n)}i(Nu,"kk");var rc={Events:[cr,xn,Wo,G,O,$n,function(e){Vr(e,ss)},He,Xe,wn,To,po,{current:!1}]};(function(e){var t=e.findFiberByHostInstance;return Gu(T({},e,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ot.ReactCurrentDispatcher,findHostInstanceByFiber:i(function(n){return n=Kl(n),n===null?null:n.stateNode},"findHostInstanceByFiber"),findFiberByHostInstance:i(function(n){return t?t(n):null},"findFiberByHostInstance"),findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:ur,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"}),K=rc,K=Nu,K=i(function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternalFiber;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):Error(h(268,Object.keys(e)));return e=Kl(t),e=e===null?null:e.stateNode,e},"__webpack_unused_export__"),K=i(function(e,t){if((be&(Yt|fn))!==pt)throw Error(h(187));var n=be;be|=1;try{return ee(99,e.bind(null,t))}finally{be=n,we()}},"__webpack_unused_export__"),K=i(function(e,t,n){if(!pi(t))throw Error(h(200));return Bl(null,e,t,!0,n)},"__webpack_unused_export__"),k.render=function(e,t,n){if(!pi(t))throw Error(h(200));return Bl(null,e,t,!1,n)},K=i(function(e){if(!pi(e))throw Error(h(40));return e._reactRootContainer?(yu(function(){Bl(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1},"__webpack_unused_export__"),K=Cu,K=i(function(e,t){return Nu(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},"__webpack_unused_export__"),K=i(function(e,t,n,o){if(!pi(n))throw Error(h(200));if(e==null||e._reactInternalFiber===void 0)throw Error(h(38));return Bl(e,t,n,!1,o)},"__webpack_unused_export__"),K="16.14.0"},961:(_,k,U)=>{"use strict";function K(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K)}catch(V){console.error(V)}}i(K,"checkDCE"),K(),_.exports=U(2551)},5287:(_,k,U)=>{"use strict";/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K=U(5228),V=typeof Symbol=="function"&&Symbol.for,T=V?Symbol.for("react.element"):60103,v=V?Symbol.for("react.portal"):60106,h=V?Symbol.for("react.fragment"):60107,D=V?Symbol.for("react.strict_mode"):60108,A=V?Symbol.for("react.profiler"):60114,B=V?Symbol.for("react.provider"):60109,H=V?Symbol.for("react.context"):60110,X=V?Symbol.for("react.forward_ref"):60112,Y=V?Symbol.for("react.suspense"):60113,Pe=V?Symbol.for("react.memo"):60115,Ie=V?Symbol.for("react.lazy"):60116,fe=typeof Symbol=="function"&&Symbol.iterator;function Oe(w){for(var P="https://reactjs.org/docs/error-decoder.html?invariant="+w,pe=1;pe<arguments.length;pe++)P+="&args[]="+encodeURIComponent(arguments[pe]);return"Minified React error #"+w+"; visit "+P+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}i(Oe,"C");var lt={isMounted:i(function(){return!1},"isMounted"),enqueueForceUpdate:i(function(){},"enqueueForceUpdate"),enqueueReplaceState:i(function(){},"enqueueReplaceState"),enqueueSetState:i(function(){},"enqueueSetState")},W={};function R(w,P,pe){this.props=w,this.context=P,this.refs=W,this.updater=pe||lt}i(R,"F"),R.prototype.isReactComponent={},R.prototype.setState=function(w,P){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error(Oe(85));this.updater.enqueueSetState(this,w,P,"setState")},R.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function l(){}i(l,"G"),l.prototype=R.prototype;function oe(w,P,pe){this.props=w,this.context=P,this.refs=W,this.updater=pe||lt}i(oe,"H");var I=oe.prototype=new l;I.constructor=oe,K(I,R.prototype),I.isPureReactComponent=!0;var q={current:null},O=Object.prototype.hasOwnProperty,F={key:!0,ref:!0,__self:!0,__source:!0};function ie(w,P,pe){var Me,ke={},Be=null,gt=null;if(P!=null)for(Me in P.ref!==void 0&&(gt=P.ref),P.key!==void 0&&(Be=""+P.key),P)O.call(P,Me)&&!F.hasOwnProperty(Me)&&(ke[Me]=P[Me]);var Te=arguments.length-2;if(Te===1)ke.children=pe;else if(1<Te){for(var Fe=Array(Te),Lt=0;Lt<Te;Lt++)Fe[Lt]=arguments[Lt+2];ke.children=Fe}if(w&&w.defaultProps)for(Me in Te=w.defaultProps,Te)ke[Me]===void 0&&(ke[Me]=Te[Me]);return{$$typeof:T,type:w,key:Be,ref:gt,props:ke,_owner:q.current}}i(ie,"M");function G(w,P){return{$$typeof:T,type:w.type,key:P,ref:w.ref,props:w.props,_owner:w._owner}}i(G,"N");function ae(w){return typeof w=="object"&&w!==null&&w.$$typeof===T}i(ae,"O");function ce(w){var P={"=":"=0",":":"=2"};return"$"+(""+w).replace(/[=:]/g,function(pe){return P[pe]})}i(ce,"escape");var he=/\/+/g,ve=[];function De(w,P,pe,Me){if(ve.length){var ke=ve.pop();return ke.result=w,ke.keyPrefix=P,ke.func=pe,ke.context=Me,ke.count=0,ke}return{result:w,keyPrefix:P,func:pe,context:Me,count:0}}i(De,"R");function He(w){w.result=null,w.keyPrefix=null,w.func=null,w.context=null,w.count=0,10>ve.length&&ve.push(w)}i(He,"S");function Xe(w,P,pe,Me){var ke=typeof w;(ke==="undefined"||ke==="boolean")&&(w=null);var Be=!1;if(w===null)Be=!0;else switch(ke){case"string":case"number":Be=!0;break;case"object":switch(w.$$typeof){case T:case v:Be=!0}}if(Be)return pe(Me,w,P===""?"."+ct(w,0):P),1;if(Be=0,P=P===""?".":P+":",Array.isArray(w))for(var gt=0;gt<w.length;gt++){ke=w[gt];var Te=P+ct(ke,gt);Be+=Xe(ke,Te,pe,Me)}else if(w===null||typeof w!="object"?Te=null:(Te=fe&&w[fe]||w["@@iterator"],Te=typeof Te=="function"?Te:null),typeof Te=="function")for(w=Te.call(w),gt=0;!(ke=w.next()).done;)ke=ke.value,Te=P+ct(ke,gt++),Be+=Xe(ke,Te,pe,Me);else if(ke==="object")throw pe=""+w,Error(Oe(31,pe==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":pe,""));return Be}i(Xe,"T");function Je(w,P,pe){return w==null?0:Xe(w,"",P,pe)}i(Je,"V");function ct(w,P){return typeof w=="object"&&w!==null&&w.key!=null?ce(w.key):P.toString(36)}i(ct,"U");function Et(w,P){w.func.call(w.context,P,w.count++)}i(Et,"W");function dt(w,P,pe){var Me=w.result,ke=w.keyPrefix;w=w.func.call(w.context,P,w.count++),Array.isArray(w)?je(w,Me,pe,function(Be){return Be}):w!=null&&(ae(w)&&(w=G(w,ke+(!w.key||P&&P.key===w.key?"":(""+w.key).replace(he,"$&/")+"/")+pe)),Me.push(w))}i(dt,"aa");function je(w,P,pe,Me,ke){var Be="";pe!=null&&(Be=(""+pe).replace(he,"$&/")+"/"),P=De(P,Be,Me,ke),Je(w,dt,P),He(P)}i(je,"X");var j={current:null};function ne(){var w=j.current;if(w===null)throw Error(Oe(321));return w}i(ne,"Z");var xe={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:q,IsSomeRendererActing:{current:!1},assign:K};k.Children={map:i(function(w,P,pe){if(w==null)return w;var Me=[];return je(w,Me,null,P,pe),Me},"map"),forEach:i(function(w,P,pe){if(w==null)return w;P=De(null,null,P,pe),Je(w,Et,P),He(P)},"forEach"),count:i(function(w){return Je(w,function(){return null},null)},"count"),toArray:i(function(w){var P=[];return je(w,P,null,function(pe){return pe}),P},"toArray"),only:i(function(w){if(!ae(w))throw Error(Oe(143));return w},"only")},k.Component=R,k.Fragment=h,k.Profiler=A,k.PureComponent=oe,k.StrictMode=D,k.Suspense=Y,k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xe,k.cloneElement=function(w,P,pe){if(w==null)throw Error(Oe(267,w));var Me=K({},w.props),ke=w.key,Be=w.ref,gt=w._owner;if(P!=null){if(P.ref!==void 0&&(Be=P.ref,gt=q.current),P.key!==void 0&&(ke=""+P.key),w.type&&w.type.defaultProps)var Te=w.type.defaultProps;for(Fe in P)O.call(P,Fe)&&!F.hasOwnProperty(Fe)&&(Me[Fe]=P[Fe]===void 0&&Te!==void 0?Te[Fe]:P[Fe])}var Fe=arguments.length-2;if(Fe===1)Me.children=pe;else if(1<Fe){Te=Array(Fe);for(var Lt=0;Lt<Fe;Lt++)Te[Lt]=arguments[Lt+2];Me.children=Te}return{$$typeof:T,type:w.type,key:ke,ref:Be,props:Me,_owner:gt}},k.createContext=function(w,P){return P===void 0&&(P=null),w={$$typeof:H,_calculateChangedBits:P,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider={$$typeof:B,_context:w},w.Consumer=w},k.createElement=ie,k.createFactory=function(w){var P=ie.bind(null,w);return P.type=w,P},k.createRef=function(){return{current:null}},k.forwardRef=function(w){return{$$typeof:X,render:w}},k.isValidElement=ae,k.lazy=function(w){return{$$typeof:Ie,_ctor:w,_status:-1,_result:null}},k.memo=function(w,P){return{$$typeof:Pe,type:w,compare:P===void 0?null:P}},k.useCallback=function(w,P){return ne().useCallback(w,P)},k.useContext=function(w,P){return ne().useContext(w,P)},k.useDebugValue=function(){},k.useEffect=function(w,P){return ne().useEffect(w,P)},k.useImperativeHandle=function(w,P,pe){return ne().useImperativeHandle(w,P,pe)},k.useLayoutEffect=function(w,P){return ne().useLayoutEffect(w,P)},k.useMemo=function(w,P){return ne().useMemo(w,P)},k.useReducer=function(w,P,pe){return ne().useReducer(w,P,pe)},k.useRef=function(w){return ne().useRef(w)},k.useState=function(w){return ne().useState(w)},k.version="16.14.0"},6540:(_,k,U)=>{"use strict";_.exports=U(5287)},7463:(_,k)=>{"use strict";/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U,K,V,T,v;if(typeof window=="undefined"||typeof MessageChannel!="function"){var h=null,D=null,A=i(function(){if(h!==null)try{var j=k.unstable_now();h(!0,j),h=null}catch(ne){throw setTimeout(A,0),ne}},"t"),B=Date.now();k.unstable_now=function(){return Date.now()-B},U=i(function(j){h!==null?setTimeout(U,0,j):(h=j,setTimeout(A,0))},"f"),K=i(function(j,ne){D=setTimeout(j,ne)},"g"),V=i(function(){clearTimeout(D)},"h"),T=i(function(){return!1},"k"),v=k.unstable_forceFrameRate=function(){}}else{var H=window.performance,X=window.Date,Y=window.setTimeout,Pe=window.clearTimeout;if(typeof console!="undefined"){var Ie=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),typeof Ie!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if(typeof H=="object"&&typeof H.now=="function")k.unstable_now=function(){return H.now()};else{var fe=X.now();k.unstable_now=function(){return X.now()-fe}}var Oe=!1,lt=null,W=-1,R=5,l=0;T=i(function(){return k.unstable_now()>=l},"k"),v=i(function(){},"l"),k.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):R=0<j?Math.floor(1e3/j):5};var oe=new MessageChannel,I=oe.port2;oe.port1.onmessage=function(){if(lt!==null){var j=k.unstable_now();l=j+R;try{lt(!0,j)?I.postMessage(null):(Oe=!1,lt=null)}catch(ne){throw I.postMessage(null),ne}}else Oe=!1},U=i(function(j){lt=j,Oe||(Oe=!0,I.postMessage(null))},"f"),K=i(function(j,ne){W=Y(function(){j(k.unstable_now())},ne)},"g"),V=i(function(){Pe(W),W=-1},"h")}function q(j,ne){var xe=j.length;j.push(ne);e:for(;;){var w=xe-1>>>1,P=j[w];if(P!==void 0&&0<ie(P,ne))j[w]=ne,j[xe]=P,xe=w;else break e}}i(q,"J");function O(j){return j=j[0],j===void 0?null:j}i(O,"L");function F(j){var ne=j[0];if(ne!==void 0){var xe=j.pop();if(xe!==ne){j[0]=xe;e:for(var w=0,P=j.length;w<P;){var pe=2*(w+1)-1,Me=j[pe],ke=pe+1,Be=j[ke];if(Me!==void 0&&0>ie(Me,xe))Be!==void 0&&0>ie(Be,Me)?(j[w]=Be,j[ke]=xe,w=ke):(j[w]=Me,j[pe]=xe,w=pe);else if(Be!==void 0&&0>ie(Be,xe))j[w]=Be,j[ke]=xe,w=ke;else break e}}return ne}return null}i(F,"M");function ie(j,ne){var xe=j.sortIndex-ne.sortIndex;return xe!==0?xe:j.id-ne.id}i(ie,"K");var G=[],ae=[],ce=1,he=null,ve=3,De=!1,He=!1,Xe=!1;function Je(j){for(var ne=O(ae);ne!==null;){if(ne.callback===null)F(ae);else if(ne.startTime<=j)F(ae),ne.sortIndex=ne.expirationTime,q(G,ne);else break;ne=O(ae)}}i(Je,"V");function ct(j){if(Xe=!1,Je(j),!He)if(O(G)!==null)He=!0,U(Et);else{var ne=O(ae);ne!==null&&K(ct,ne.startTime-j)}}i(ct,"W");function Et(j,ne){He=!1,Xe&&(Xe=!1,V()),De=!0;var xe=ve;try{for(Je(ne),he=O(G);he!==null&&(!(he.expirationTime>ne)||j&&!T());){var w=he.callback;if(w!==null){he.callback=null,ve=he.priorityLevel;var P=w(he.expirationTime<=ne);ne=k.unstable_now(),typeof P=="function"?he.callback=P:he===O(G)&&F(G),Je(ne)}else F(G);he=O(G)}if(he!==null)var pe=!0;else{var Me=O(ae);Me!==null&&K(ct,Me.startTime-ne),pe=!1}return pe}finally{he=null,ve=xe,De=!1}}i(Et,"X");function dt(j){switch(j){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}i(dt,"Y");var je=v;k.unstable_IdlePriority=5,k.unstable_ImmediatePriority=1,k.unstable_LowPriority=4,k.unstable_NormalPriority=3,k.unstable_Profiling=null,k.unstable_UserBlockingPriority=2,k.unstable_cancelCallback=function(j){j.callback=null},k.unstable_continueExecution=function(){He||De||(He=!0,U(Et))},k.unstable_getCurrentPriorityLevel=function(){return ve},k.unstable_getFirstCallbackNode=function(){return O(G)},k.unstable_next=function(j){switch(ve){case 1:case 2:case 3:var ne=3;break;default:ne=ve}var xe=ve;ve=ne;try{return j()}finally{ve=xe}},k.unstable_pauseExecution=function(){},k.unstable_requestPaint=je,k.unstable_runWithPriority=function(j,ne){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var xe=ve;ve=j;try{return ne()}finally{ve=xe}},k.unstable_scheduleCallback=function(j,ne,xe){var w=k.unstable_now();if(typeof xe=="object"&&xe!==null){var P=xe.delay;P=typeof P=="number"&&0<P?w+P:w,xe=typeof xe.timeout=="number"?xe.timeout:dt(j)}else xe=dt(j),P=w;return xe=P+xe,j={id:ce++,callback:ne,priorityLevel:j,startTime:P,expirationTime:xe,sortIndex:-1},P>w?(j.sortIndex=P,q(ae,j),O(G)===null&&j===O(ae)&&(Xe?V():Xe=!0,K(ct,P-w))):(j.sortIndex=xe,q(G,j),He||De||(He=!0,U(Et))),j},k.unstable_shouldYield=function(){var j=k.unstable_now();Je(j);var ne=O(G);return ne!==he&&he!==null&&ne!==null&&ne.callback!==null&&ne.startTime<=j&&ne.expirationTime<he.expirationTime||T()},k.unstable_wrapCallback=function(j){var ne=ve;return function(){var xe=ve;ve=ne;try{return j.apply(this,arguments)}finally{ve=xe}}}},9982:(_,k,U)=>{"use strict";_.exports=U(7463)},5072:_=>{"use strict";var k=[];function U(T){for(var v=-1,h=0;h<k.length;h++)if(k[h].identifier===T){v=h;break}return v}i(U,"getIndexByIdentifier");function K(T,v){for(var h={},D=[],A=0;A<T.length;A++){var B=T[A],H=v.base?B[0]+v.base:B[0],X=h[H]||0,Y="".concat(H," ").concat(X);h[H]=X+1;var Pe=U(Y),Ie={css:B[1],media:B[2],sourceMap:B[3],supports:B[4],layer:B[5]};if(Pe!==-1)k[Pe].references++,k[Pe].updater(Ie);else{var fe=V(Ie,v);v.byIndex=A,k.splice(A,0,{identifier:Y,updater:fe,references:1})}D.push(Y)}return D}i(K,"modulesToDom");function V(T,v){var h=v.domAPI(v);h.update(T);var D=i(function(B){if(B){if(B.css===T.css&&B.media===T.media&&B.sourceMap===T.sourceMap&&B.supports===T.supports&&B.layer===T.layer)return;h.update(T=B)}else h.remove()},"updater");return D}i(V,"addElementStyle"),_.exports=function(T,v){v=v||{},T=T||[];var h=K(T,v);return i(function(A){A=A||[];for(var B=0;B<h.length;B++){var H=h[B],X=U(H);k[X].references--}for(var Y=K(A,v),Pe=0;Pe<h.length;Pe++){var Ie=h[Pe],fe=U(Ie);k[fe].references===0&&(k[fe].updater(),k.splice(fe,1))}h=Y},"update")}},7659:_=>{"use strict";var k={};function U(V){if(typeof k[V]=="undefined"){var T=document.querySelector(V);if(window.HTMLIFrameElement&&T instanceof window.HTMLIFrameElement)try{T=T.contentDocument.head}catch{T=null}k[V]=T}return k[V]}i(U,"getTarget");function K(V,T){var v=U(V);if(!v)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");v.appendChild(T)}i(K,"insertBySelector"),_.exports=K},540:_=>{"use strict";function k(U){var K=document.createElement("style");return U.setAttributes(K,U.attributes),U.insert(K,U.options),K}i(k,"insertStyleElement"),_.exports=k},5056:(_,k,U)=>{"use strict";function K(V){var T=U.nc;T&&V.setAttribute("nonce",T)}i(K,"setAttributesWithoutAttributes"),_.exports=K},7825:_=>{"use strict";function k(V,T,v){var h="";v.supports&&(h+="@supports (".concat(v.supports,") {")),v.media&&(h+="@media ".concat(v.media," {"));var D=typeof v.layer!="undefined";D&&(h+="@layer".concat(v.layer.length>0?" ".concat(v.layer):""," {")),h+=v.css,D&&(h+="}"),v.media&&(h+="}"),v.supports&&(h+="}");var A=v.sourceMap;A&&typeof btoa!="undefined"&&(h+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),T.styleTagTransform(h,V,T.options)}i(k,"apply");function U(V){if(V.parentNode===null)return!1;V.parentNode.removeChild(V)}i(U,"removeStyleElement");function K(V){if(typeof document=="undefined")return{update:i(function(){},"update"),remove:i(function(){},"remove")};var T=V.insertStyleElement(V);return{update:i(function(h){k(T,V,h)},"update"),remove:i(function(){U(T)},"remove")}}i(K,"domAPI"),_.exports=K},1113:_=>{"use strict";function k(U,K){if(K.styleSheet)K.styleSheet.cssText=U;else{for(;K.firstChild;)K.removeChild(K.firstChild);K.appendChild(document.createTextNode(U))}}i(k,"styleTagTransform"),_.exports=k},7290:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8 2C4.686 2 2 4.686 2 8C2 11.314 4.686 14 8 14C11.314 14 14 11.314 14 8C14 4.686 11.314 2 8 2ZM1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8ZM8 12.25C9.933 12.25 11.5 11.036 11.5 9.214C11.5 8.543 10.956 8 10.286 8H5.715C5.044 8 4.501 8.544 4.501 9.214C4.501 11.035 6.068 12.25 8.001 12.25H8ZM8 7.25C9.036 7.25 9.875 6.411 9.875 5.375C9.875 4.339 9.036 3.5 8 3.5C6.964 3.5 6.125 4.339 6.125 5.375C6.125 6.411 6.964 7.25 8 7.25Z"></path></svg>'},5898:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8 1.5C8 1.22386 7.77614 1 7.5 1C7.22386 1 7 1.22386 7 1.5V7H1.5C1.22386 7 1 7.22386 1 7.5C1 7.77614 1.22386 8 1.5 8H7V13.5C7 13.7761 7.22386 14 7.5 14C7.77614 14 8 13.7761 8 13.5V8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H8V1.5Z"></path></svg>'},2631:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13.6572 3.13573C13.8583 2.9465 14.175 2.95614 14.3643 3.15722C14.5535 3.35831 14.5438 3.675 14.3428 3.86425L5.84277 11.8642C5.64597 12.0494 5.33756 12.0446 5.14648 11.8535L1.64648 8.35351C1.45121 8.15824 1.45121 7.84174 1.64648 7.64647C1.84174 7.45121 2.15825 7.45121 2.35351 7.64647L5.50976 10.8027L13.6572 3.13573Z"></path></svg>'},8251:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z"></path></svg>'},8674:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8 4C8.36719 4 8.72135 4.04818 9.0625 4.14453C9.40365 4.23828 9.72135 4.3724 10.0156 4.54688C10.3125 4.72135 10.582 4.93099 10.8242 5.17578C11.069 5.41797 11.2786 5.6875 11.4531 5.98438C11.6276 6.27865 11.7617 6.59635 11.8555 6.9375C11.9518 7.27865 12 7.63281 12 8C12 8.36719 11.9518 8.72135 11.8555 9.0625C11.7617 9.40365 11.6276 9.72266 11.4531 10.0195C11.2786 10.3138 11.069 10.5833 10.8242 10.8281C10.582 11.0703 10.3125 11.2786 10.0156 11.4531C9.72135 11.6276 9.40365 11.763 9.0625 11.8594C8.72135 11.9531 8.36719 12 8 12C7.63281 12 7.27865 11.9531 6.9375 11.8594C6.59635 11.763 6.27734 11.6276 5.98047 11.4531C5.6862 11.2786 5.41667 11.0703 5.17188 10.8281C4.92969 10.5833 4.72135 10.3138 4.54688 10.0195C4.3724 9.72266 4.23698 9.40365 4.14062 9.0625C4.04688 8.72135 4 8.36719 4 8C4 7.63281 4.04688 7.27865 4.14062 6.9375C4.23698 6.59635 4.3724 6.27865 4.54688 5.98438C4.72135 5.6875 4.92969 5.41797 5.17188 5.17578C5.41667 4.93099 5.6862 4.72135 5.98047 4.54688C6.27734 4.3724 6.59635 4.23828 6.9375 4.14453C7.27865 4.04818 7.63281 4 8 4Z"></path></svg>'},1019:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8.70701 8.00001L12.353 4.35401C12.548 4.15901 12.548 3.84201 12.353 3.64701C12.158 3.45201 11.841 3.45201 11.646 3.64701L8.00001 7.29301L4.35401 3.64701C4.15901 3.45201 3.84201 3.45201 3.64701 3.64701C3.45201 3.84201 3.45201 4.15901 3.64701 4.35401L7.29301 8.00001L3.64701 11.646C3.45201 11.841 3.45201 12.158 3.64701 12.353C3.74501 12.451 3.87301 12.499 4.00101 12.499C4.12901 12.499 4.25701 12.45 4.35501 12.353L8.00101 8.70701L11.647 12.353C11.745 12.451 11.873 12.499 12.001 12.499C12.129 12.499 12.257 12.45 12.355 12.353C12.55 12.158 12.55 11.841 12.355 11.646L8.70901 8.00001H8.70701Z"></path></svg>'},7548:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M1 4.5C1 3.11929 2.11929 2 3.5 2H12.5C13.8807 2 15 3.11929 15 4.5V9.5C15 10.8807 13.8807 12 12.5 12H8.68787L5.62533 14.6797C4.99168 15.2342 4 14.7842 4 13.9422V12H3.5C2.11929 12 1 10.8807 1 9.5V4.5ZM3.5 3C2.67157 3 2 3.67157 2 4.5V9.5C2 10.3284 2.67157 11 3.5 11H5V13.8981L8.31213 11H12.5C13.3284 11 14 10.3284 14 9.5V4.5C14 3.67157 13.3284 3 12.5 3H3.5Z"></path></svg>'},5787:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M6.25 9.03699C6.664 9.03699 6.99999 9.373 7 9.78699V11.288C7 11.702 6.664 12.038 6.25 12.038C5.836 12.038 5.5 11.702 5.5 11.288V9.78699C5.50001 9.373 5.836 9.03699 6.25 9.03699Z"></path><path d="M9.75 9.03699C10.164 9.03699 10.5 9.373 10.5 9.78699V11.288C10.5 11.702 10.164 12.038 9.75 12.038C9.336 12.038 9 11.702 9 11.288V9.78699C9.00001 9.373 9.336 9.03699 9.75 9.03699Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.13867 1.80652C8.82067 1.07559 9.87705 0.907879 11.083 1.04187C12.3128 1.17885 13.2276 1.56987 13.8066 2.30261C14.3726 3.01761 14.5 3.91699 14.5 4.78699C14.5 5.35899 14.4471 5.93524 14.2461 6.44324C14.312 6.67097 14.3441 6.87174 14.3721 7.05457C14.3841 7.13057 14.3962 7.20332 14.4092 7.27332C15.333 7.65842 15.931 8.74411 16 9.36804V11.2401C15.9996 12.0063 12.6487 15.035 7.99805 15.035C3.43611 15.035 0.125083 12.1211 0 11.286V9.33777C0.0850941 8.7098 0.67711 7.65235 1.58789 7.27332C1.60089 7.20332 1.61202 7.12957 1.62402 7.05457C1.65299 6.87174 1.6841 6.67097 1.75 6.44324C1.549 5.93524 1.49609 5.35899 1.49609 4.78699C1.49609 3.91699 1.62445 3.01761 2.18945 2.30261C2.76847 1.5699 3.68333 1.17884 4.91309 1.04187C6.11903 0.907894 7.17544 1.07557 7.85742 1.80652C7.90736 1.85945 7.95314 1.91464 7.99609 1.97156C8.04004 1.91467 8.08976 1.85943 8.13867 1.80652ZM8 6.30261C7.85503 6.57456 7.672 6.82481 7.45605 7.04578C6.80607 7.70976 5.89305 8.03697 4.74609 8.03699C4.09409 8.03699 3.50955 7.95597 3.01855 7.74597L2.99609 7.86219V12.1171C3.41537 12.4402 5.71823 13.5497 7.99805 13.5497C10.278 13.5497 12.5819 12.4401 13 12.1171V7.86219L12.9766 7.74597C12.4866 7.95586 11.9018 8.03699 11.25 8.03699C10.104 8.03699 9.19104 7.70978 8.54004 7.04578C8.32508 6.8248 8.14398 6.57458 8 6.30261ZM6.76172 2.82996C6.56865 2.62401 6.12477 2.41713 5.08008 2.53308C4.06108 2.64608 3.60119 2.93728 3.36719 3.23328C3.12024 3.54528 2.99805 4.02207 2.99805 4.78699C2.99805 5.57984 3.12672 5.95806 3.30566 6.15808C3.46766 6.33908 3.82505 6.53699 4.74805 6.53699C5.60091 6.53698 6.08674 6.30189 6.38574 5.99695C6.70071 5.67499 6.91291 5.17009 7.00293 4.44422C7.11993 3.50922 6.96572 3.04896 6.76172 2.82996ZM10.917 2.53308C9.87329 2.41712 9.42942 2.62402 9.23633 2.82996C9.03233 3.04896 8.87714 3.50922 8.99414 4.44422C9.08516 5.17008 9.29734 5.67499 9.6123 5.99695C9.91132 6.30188 10.3961 6.53699 11.25 6.53699C12.172 6.53699 12.5304 6.33908 12.6924 6.15808C12.8713 5.95805 13 5.57981 13 4.78699C13 4.02209 12.8768 3.54528 12.6299 3.23328C12.3969 2.93728 11.937 2.64608 10.917 2.53308Z"></path></svg>'},6270:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M3 5V12.73C2.4 12.38 2 11.74 2 11V5C2 2.79 3.79 1 6 1H9C9.74 1 10.38 1.4 10.73 2H6C4.35 2 3 3.35 3 5ZM11 15H6C4.897 15 4 14.103 4 13V5C4 3.897 4.897 3 6 3H11C12.103 3 13 3.897 13 5V13C13 14.103 12.103 15 11 15ZM12 5C12 4.448 11.552 4 11 4H6C5.448 4 5 4.448 5 5V13C5 13.552 5.448 14 6 14H11C11.552 14 12 13.552 12 13V5Z"></path></svg>'},4837:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M14.236 1.76386C13.2123 0.740172 11.5525 0.740171 10.5289 1.76386L2.65722 9.63549C2.28304 10.0097 2.01623 10.4775 1.88467 10.99L1.01571 14.3755C0.971767 14.5467 1.02148 14.7284 1.14646 14.8534C1.27144 14.9783 1.45312 15.028 1.62432 14.9841L5.00978 14.1151C5.52234 13.9836 5.99015 13.7168 6.36433 13.3426L14.236 5.47097C15.2596 4.44728 15.2596 2.78755 14.236 1.76386ZM11.236 2.47097C11.8691 1.8378 12.8957 1.8378 13.5288 2.47097C14.162 3.10413 14.162 4.1307 13.5288 4.76386L12.75 5.54269L10.4571 3.24979L11.236 2.47097ZM9.75002 3.9569L12.0429 6.24979L5.65722 12.6355C5.40969 12.883 5.10023 13.0595 4.76117 13.1465L2.19447 13.8053L2.85327 11.2386C2.9403 10.8996 3.1168 10.5901 3.36433 10.3426L9.75002 3.9569Z"></path></svg>'},5473:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8 1C4.14 1 1 4.14 1 8C1 11.86 4.14 15 8 15C11.86 15 15 11.86 15 8C15 4.14 11.86 1 8 1ZM8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14ZM10.854 5.854L8.708 8L10.854 10.146C11.049 10.341 11.049 10.658 10.854 10.853C10.756 10.951 10.628 10.999 10.5 10.999C10.372 10.999 10.244 10.95 10.146 10.853L8 8.707L5.854 10.853C5.756 10.951 5.628 10.999 5.5 10.999C5.372 10.999 5.244 10.95 5.146 10.853C4.951 10.658 4.951 10.341 5.146 10.146L7.292 8L5.146 5.854C4.951 5.659 4.951 5.342 5.146 5.147C5.341 4.952 5.658 4.952 5.853 5.147L7.999 7.293L10.145 5.147C10.34 4.952 10.657 4.952 10.852 5.147C11.047 5.342 11.047 5.659 10.852 5.854H10.854Z"></path></svg>'},1456:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M9.5 1C8.67157 1 8 1.67157 8 2.5V4.5C8 5.15293 8.41717 5.70842 8.99951 5.91447V7C8.99951 7.19401 9.11174 7.3705 9.28743 7.45279C9.46313 7.53508 9.67056 7.50831 9.8196 7.38411L11.4805 6H13.5C14.3284 6 15 5.32843 15 4.5V2.5C15 1.67157 14.3284 1 13.5 1H9.5ZM9 2.5C9 2.22386 9.22386 2 9.5 2H13.5C13.7761 2 14 2.22386 14 2.5V4.5C14 4.77614 13.7761 5 13.5 5H11.2995C11.1825 5 11.0693 5.04101 10.9794 5.11589L9.99951 5.93248V5.5C9.99951 5.22395 9.7758 5.00013 9.49975 5C9.22373 4.99987 9 4.77606 9 4.5V2.5ZM3 6C3 4.89543 3.89543 4 5 4C6.10457 4 7 4.89543 7 6C7 7.10457 6.10457 8 5 8C3.89543 8 3 7.10457 3 6ZM5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7C5.55228 7 6 6.55228 6 6C6 5.44772 5.55228 5 5 5ZM2.49998 9L7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.6161 8.54103 12.5103 7.78785 13.1148C7.04658 13.7098 6.05308 14 5 14C3.94692 14 2.95342 13.7098 2.21215 13.1148C1.45897 12.5103 1 11.6161 1 10.5C1 9.67161 1.67156 9 2.49998 9ZM7.5 10L2.49998 10C2.22387 10 2 10.2239 2 10.5C2 11.3169 2.32453 11.9227 2.8381 12.3349C3.36358 12.7567 4.12008 13 5 13C5.87992 13 6.63642 12.7567 7.1619 12.3349C7.67547 11.9227 8 11.3169 8 10.5C8 10.2239 7.77614 10 7.5 10Z"></path></svg>'},979:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11.5 8C11.5 6.24 10.194 4.779 8.5 4.536V1.5C8.5 1.224 8.276 1 8 1C7.724 1 7.5 1.224 7.5 1.5V4.536C5.806 4.779 4.5 6.24 4.5 8C4.5 9.76 5.806 11.221 7.5 11.464V14.5C7.5 14.776 7.724 15 8 15C8.276 15 8.5 14.776 8.5 14.5V11.464C10.194 11.221 11.5 9.76 11.5 8ZM8 10.5C6.621 10.5 5.5 9.378 5.5 8C5.5 6.622 6.621 5.5 8 5.5C9.379 5.5 10.5 6.622 10.5 8C10.5 9.378 9.379 10.5 8 10.5Z"></path></svg>'},425:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M9.14645 5.85355C9.34171 6.04882 9.65829 6.04882 9.85355 5.85355C10.0488 5.65829 10.0488 5.34171 9.85355 5.14645L8.70711 4H10.5C11.3284 4 12 4.67157 12 5.5V10.05C10.8589 10.2816 10 11.2905 10 12.5C10 13.8807 11.1193 15 12.5 15C13.8807 15 15 13.8807 15 12.5C15 11.2905 14.1411 10.2816 13 10.05V5.5C13 4.11929 11.8807 3 10.5 3H8.70711L9.85355 1.85355C10.0488 1.65829 10.0488 1.34171 9.85355 1.14645C9.65829 0.951184 9.34171 0.951184 9.14645 1.14645L7.14645 3.14645C6.95118 3.34171 6.95118 3.65829 7.14645 3.85355L9.14645 5.85355ZM14 12.5C14 13.3284 13.3284 14 12.5 14C11.6716 14 11 13.3284 11 12.5C11 11.6716 11.6716 11 12.5 11C13.3284 11 14 11.6716 14 12.5ZM6 3.5C6 4.70948 5.14112 5.71836 4 5.94999V10.5C4 11.3284 4.67157 12 5.5 12H7.29289L6.14645 10.8536C5.95118 10.6583 5.95118 10.3417 6.14645 10.1464C6.34171 9.95118 6.65829 9.95118 6.85355 10.1464L8.85355 12.1464C9.04882 12.3417 9.04882 12.6583 8.85355 12.8536L6.85355 14.8536C6.65829 15.0488 6.34171 15.0488 6.14645 14.8536C5.95118 14.6583 5.95118 14.3417 6.14645 14.1464L7.29289 13H5.5C4.11929 13 3 11.8807 3 10.5V5.94999C1.85888 5.71836 1 4.70948 1 3.5C1 2.11929 2.11929 1 3.5 1C4.88071 1 6 2.11929 6 3.5ZM5 3.5C5 2.67157 4.32843 2 3.5 2C2.67157 2 2 2.67157 2 3.5C2 4.32843 2.67157 5 3.5 5C4.32843 5 5 4.32843 5 3.5Z"></path></svg>'},2400:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11.5 5.99998C10.9265 6.00006 10.3704 6.19736 9.92505 6.55877C9.47971 6.92018 9.17217 7.42373 9.05402 7.98498C7.17202 7.85998 5.46602 6.96298 5.08102 5.93098C5.67998 5.78724 6.20478 5.42744 6.55479 4.92058C6.9048 4.41373 7.05538 3.7955 6.97763 3.18446C6.89989 2.57343 6.5993 2.0126 6.13352 1.60954C5.66774 1.20648 5.06956 0.989562 4.45369 1.00039C3.83782 1.01121 3.24763 1.24902 2.7963 1.6682C2.34497 2.08738 2.06428 2.65842 2.00806 3.27181C1.95184 3.8852 2.12404 4.49776 2.49165 4.992C2.85925 5.48624 3.39638 5.82737 4.00002 5.94998V10.05C3.393 10.1739 2.85361 10.5188 2.48642 11.0178C2.11923 11.5168 1.95041 12.1343 2.01268 12.7507C2.07495 13.3671 2.36387 13.9385 2.82344 14.3539C3.28301 14.7694 3.88048 14.9995 4.50002 14.9995C5.11956 14.9995 5.71703 14.7694 6.1766 14.3539C6.63616 13.9385 6.92509 13.3671 6.98736 12.7507C7.04963 12.1343 6.88081 11.5168 6.51362 11.0178C6.14643 10.5188 5.60704 10.1739 5.00002 10.05V7.46598C6.15462 8.38805 7.57188 8.92022 9.04802 8.98598C9.1401 9.4506 9.36227 9.8795 9.68867 10.2227C10.0151 10.566 10.4323 10.8094 10.8917 10.9248C11.3511 11.0401 11.8338 11.0225 12.2836 10.8741C12.7334 10.7257 13.1318 10.4526 13.4324 10.0865C13.733 9.72047 13.9234 9.27655 13.9815 8.80647C14.0395 8.33639 13.9629 7.85948 13.7604 7.43128C13.5579 7.00308 13.238 6.64122 12.8378 6.38782C12.4376 6.13442 11.9737 5.99992 11.5 5.99998ZM3.00002 3.49998C3.00002 3.20331 3.08799 2.9133 3.25282 2.66662C3.41764 2.41995 3.65191 2.22769 3.92599 2.11416C4.20008 2.00063 4.50168 1.97092 4.79265 2.0288C5.08363 2.08668 5.3509 2.22954 5.56068 2.43932C5.77046 2.6491 5.91332 2.91637 5.9712 3.20734C6.02908 3.49831 5.99937 3.79991 5.88584 4.074C5.77231 4.34809 5.58005 4.58236 5.33337 4.74718C5.0867 4.912 4.79669 4.99998 4.50002 4.99998C4.10219 4.99998 3.72066 4.84194 3.43936 4.56064C3.15805 4.27933 3.00002 3.8978 3.00002 3.49998ZM6.00002 12.5C6.00002 12.7966 5.91205 13.0867 5.74722 13.3333C5.5824 13.58 5.34813 13.7723 5.07404 13.8858C4.79996 13.9993 4.49836 14.029 4.20738 13.9712C3.91641 13.9133 3.64914 13.7704 3.43936 13.5606C3.22958 13.3509 3.08672 13.0836 3.02884 12.7926C2.97096 12.5016 3.00067 12.2 3.1142 11.926C3.22773 11.6519 3.41999 11.4176 3.66666 11.2528C3.91334 11.088 4.20335 11 4.50002 11C4.89784 11 5.27938 11.158 5.56068 11.4393C5.84198 11.7206 6.00002 12.1022 6.00002 12.5ZM11.5 9.99998C11.2033 9.99998 10.9133 9.91201 10.6667 9.74718C10.42 9.58236 10.2277 9.34809 10.1142 9.074C10.0007 8.79991 9.97096 8.49831 10.0288 8.20734C10.0867 7.91637 10.2296 7.6491 10.4394 7.43932C10.6491 7.22954 10.9164 7.08668 11.2074 7.0288C11.4984 6.97092 11.8 7.00063 12.074 7.11416C12.3481 7.22769 12.5824 7.41995 12.7472 7.66662C12.912 7.9133 13 8.20331 13 8.49998C13 8.8978 12.842 9.27933 12.5607 9.56064C12.2794 9.84194 11.8978 9.99998 11.5 9.99998Z"></path></svg>'},9494:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13 10.05V7.5C13 7.224 12.776 7 12.5 7C12.224 7 12 7.224 12 7.5V10.05C10.86 10.282 10 11.292 10 12.5C10 13.879 11.122 15 12.5 15C13.878 15 15 13.879 15 12.5C15 11.292 14.14 10.283 13 10.05ZM12.5 14C11.673 14 11 13.327 11 12.5C11 11.673 11.673 11 12.5 11C13.327 11 14 11.673 14 12.5C14 13.327 13.327 14 12.5 14ZM6 3.5C6 2.12 4.88 1 3.5 1C2.12 1 1 2.12 1 3.5C1 4.71 1.86 5.72 3 5.95V10.051C1.86 10.283 1 11.293 1 12.5C1 13.879 2.122 15 3.5 15C4.878 15 6 13.879 6 12.5C6 11.292 5.14 10.283 4 10.051V5.95C5.14 5.72 6 4.71 6 3.5ZM5 12.5C5 13.327 4.327 14 3.5 14C2.673 14 2 13.327 2 12.5C2 11.673 2.673 11 3.5 11C4.327 11 5 11.673 5 12.5ZM3.5 5C2.67 5 2 4.33 2 3.5C2 2.67 2.67 2 3.5 2C4.33 2 5 2.67 5 3.5C5 4.33 4.33 5 3.5 5ZM10.646 4.646L11.792 3.5L10.646 2.354C10.451 2.159 10.451 1.842 10.646 1.647C10.841 1.452 11.158 1.452 11.353 1.647L12.499 2.793L13.645 1.647C13.84 1.452 14.157 1.452 14.352 1.647C14.547 1.842 14.547 2.159 14.352 2.354L13.206 3.5L14.352 4.646C14.547 4.841 14.547 5.158 14.352 5.353C14.254 5.451 14.126 5.499 13.998 5.499C13.87 5.499 13.742 5.45 13.644 5.353L12.498 4.207L11.352 5.353C11.254 5.451 11.126 5.499 10.998 5.499C10.87 5.499 10.742 5.45 10.644 5.353C10.449 5.158 10.449 4.841 10.644 4.646H10.646Z"></path></svg>'},4551:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M6 3.5C6 2.12 4.88 1 3.5 1C2.12 1 1 2.12 1 3.5C1 4.71 1.86 5.72 3 5.95V10.051C1.86 10.283 1 11.293 1 12.5C1 13.879 2.122 15 3.5 15C4.878 15 6 13.879 6 12.5C6 11.292 5.14 10.283 4 10.051V5.95C5.14 5.72 6 4.71 6 3.5ZM5 12.5C5 13.327 4.327 14 3.5 14C2.673 14 2 13.327 2 12.5C2 11.673 2.673 11 3.5 11C4.327 11 5 11.673 5 12.5ZM3.5 5C2.67 5 2 4.33 2 3.5C2 2.67 2.67 2 3.5 2C4.33 2 5 2.67 5 3.5C5 4.33 4.33 5 3.5 5ZM12.5 10C11.122 10 10 11.121 10 12.5C10 13.879 11.122 15 12.5 15C13.878 15 15 13.879 15 12.5C15 11.121 13.878 10 12.5 10ZM12.5 14C11.673 14 11 13.327 11 12.5C11 11.673 11.673 11 12.5 11C13.327 11 14 11.673 14 12.5C14 13.327 13.327 14 12.5 14ZM11.5 7.5C11.5 6.948 11.948 6.5 12.5 6.5C13.052 6.5 13.5 6.948 13.5 7.5C13.5 8.052 13.052 8.5 12.5 8.5C11.948 8.5 11.5 8.052 11.5 7.5ZM11.5 3.5C11.5 2.948 11.948 2.5 12.5 2.5C13.052 2.5 13.5 2.948 13.5 3.5C13.5 4.052 13.052 4.5 12.5 4.5C11.948 4.5 11.5 4.052 11.5 3.5Z"></path></svg>'},9301:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13 10.05V5.5C13 4.12 11.88 3 10.5 3H8.71L9.85 1.85C10.05 1.66 10.05 1.34 9.85 1.15C9.66 0.95 9.34 0.95 9.15 1.15L7.15 3.15C6.95 3.34 6.95 3.66 7.15 3.85L9.15 5.85C9.34 6.05 9.66 6.05 9.85 5.85C10.05 5.66 10.05 5.34 9.85 5.15L8.71 4H10.5C11.33 4 12 4.67 12 5.5V10.05C10.86 10.28 10 11.29 10 12.5C10 13.88 11.12 15 12.5 15C13.88 15 15 13.88 15 12.5C15 11.29 14.14 10.28 13 10.05ZM12.5 14C11.67 14 11 13.33 11 12.5C11 11.67 11.67 11 12.5 11C13.33 11 14 11.67 14 12.5C14 13.33 13.33 14 12.5 14ZM6 3.5C6 2.12 4.88 1 3.5 1C2.12 1 1 2.12 1 3.5C1 4.71 1.86 5.72 3 5.95V10.051C1.86 10.283 1 11.293 1 12.5C1 13.879 2.122 15 3.5 15C4.878 15 6 13.879 6 12.5C6 11.292 5.14 10.283 4 10.051V5.95C5.14 5.72 6 4.71 6 3.5ZM2 3.5C2 2.67 2.67 2 3.5 2C4.33 2 5 2.67 5 3.5C5 4.33 4.33 5 3.5 5C2.67 5 2 4.33 2 3.5ZM5 12.5C5 13.327 4.327 14 3.5 14C2.673 14 2 13.327 2 12.5C2 11.673 2.673 11 3.5 11C4.327 11 5 11.673 5 12.5Z"></path></svg>'},4468:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11.5 2H4.5C3.119 2 2 3.119 2 4.5V11.5C2 12.881 3.119 14 4.5 14H11.5C12.881 14 14 12.881 14 11.5V4.5C14 3.119 12.881 2 11.5 2ZM3 4.5C3 3.672 3.672 3 4.5 3H6V6H3V4.5ZM4.5 13C3.672 13 3 12.328 3 11.5V7H6V13H4.5ZM13 11.5C13 12.328 12.328 13 11.5 13H7V7H13V11.5ZM13 6H7V3H11.5C12.328 3 13 3.672 13 4.5V6Z"></path></svg>'},4593:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 11.859 4.14 15 8 15C11.86 15 15 11.859 15 8C15 4.141 11.86 1 8 1C4.14 1 1 4.141 1 8ZM2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8Z"></path></svg>'},2775:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13.5 8.5C13.224 8.5 13 8.276 13 8C13 5.243 10.757 3 8 3C5.243 3 3 5.243 3 8C3 8.276 2.776 8.5 2.5 8.5C2.224 8.5 2 8.276 2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 8.276 13.776 8.5 13.5 8.5Z"></path></svg>'},7907:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M7.1472 0.146372C7.3422 -0.0486279 7.65923 -0.0486279 7.85423 0.146372L11.3542 3.64637C11.5489 3.8414 11.5491 4.15852 11.3542 4.3534C11.1593 4.54823 10.8422 4.54804 10.6472 4.3534L8.00071 1.70692V6.49989C8.00071 9.99981 9.99987 10.9998 13.4997 10.9999C13.7757 10.9999 13.9997 11.2239 13.9997 11.4999C13.9997 11.7759 13.7748 11.9999 13.4988 11.9999C10.9978 11.9999 9.08321 11.4131 7.99974 9.995V14.4999C7.99974 14.776 7.77588 14.9999 7.49974 14.9999C7.22371 14.9998 6.99974 14.7759 6.99974 14.4999V1.70692L4.35423 4.3534C4.15934 4.54823 3.84221 4.54804 3.6472 4.3534C3.45222 4.15842 3.45226 3.84138 3.6472 3.64637L7.1472 0.146372Z"></path></svg>'},3689:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13.854 6.146L12.147 4.439C11.864 4.156 11.487 4 11.086 4H9V3C9 1.897 8.103 1 7 1C5.897 1 5 1.897 5 3V4H3.5C2.673 4 2 4.673 2 5.5V7.5C2 8.327 2.673 9 3.5 9H5V14C5 14.551 5.449 15 6 15H8C8.551 15 9 14.551 9 14V9H11.086C11.486 9 11.863 8.844 12.147 8.561L13.854 6.854C14.049 6.659 14.049 6.341 13.854 6.146ZM6 3C6 2.449 6.449 2 7 2C7.551 2 8 2.449 8 3V4H6V3ZM8 14H6V9H8V14ZM11.439 7.854C11.346 7.947 11.217 8 11.085 8H3.5C3.224 8 3 7.776 3 7.5V5.5C3 5.224 3.224 5 3.5 5H11.086C11.217 5 11.346 5.053 11.44 5.146L12.794 6.5L11.439 7.854Z"></path></svg>'},4826:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M10.6484 5.64648C10.8434 5.45148 11.1605 5.45148 11.3555 5.64648C11.5498 5.84137 11.5499 6.15766 11.3555 6.35254L7.35547 10.3525C7.25747 10.4495 7.12898 10.499 7.00098 10.499C6.87299 10.499 6.74545 10.4505 6.64746 10.3525L4.64746 8.35254C4.45247 8.15754 4.45248 7.84148 4.64746 7.64648C4.84246 7.45148 5.15949 7.45148 5.35449 7.64648L7 9.29199L10.6465 5.64648H10.6484Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1C11.86 1 15 4.14 15 8C15 11.86 11.86 15 8 15C4.14 15 1 11.86 1 8C1 4.14 4.14 1 8 1ZM8 2C4.691 2 2 4.691 2 8C2 11.309 4.691 14 8 14C11.309 14 14 11.309 14 8C14 4.691 11.309 2 8 2Z"></path></svg>'},4759:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M5.99902 2.99902C6.55101 2.99904 6.99902 3.44703 6.99902 3.99902V4.99902C6.99902 7.59102 6.47153 9.73354 4.35254 11.8525C4.15754 12.0475 3.84148 12.0475 3.64648 11.8525C3.45148 11.6575 3.45148 11.3415 3.64648 11.1465C5.03348 9.76049 5.65377 8.38594 5.88477 6.79395C5.61781 6.9259 5.31794 7 5 7H4C3.448 7 3 6.552 3 6V4C3.00001 3.44801 3.44801 3 4 3H6L5.99902 2.99902Z"></path><path d="M11.999 2.99902C12.551 2.99904 12.999 3.44703 12.999 3.99902V4.99902C12.999 7.59102 12.4715 9.73354 10.3525 11.8525C10.1575 12.0475 9.84148 12.0475 9.64648 11.8525C9.45148 11.6575 9.45148 11.3415 9.64648 11.1465C11.0335 9.76049 11.6538 8.38594 11.8848 6.79395C11.6178 6.9259 11.3179 7 11 7H10C9.448 7 9 6.552 9 6V4C9.00001 3.44801 9.44801 3 10 3H12L11.999 2.99902Z"></path></svg>'},6276:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12.561 4.35398L9.647 1.43998C9.368 1.16098 8.981 1.00098 8.586 1.00098H4C2.897 1.00098 2 1.89798 2 3.00098V13.001C2 14.104 2.897 15.001 4 15.001H11C12.103 15.001 13 14.104 13 13.001V5.41498C13 5.01998 12.84 4.63398 12.561 4.35398ZM12 13C12 13.552 11.552 14 11 14H4C3.448 14 3 13.552 3 13V2.99998C3 2.44798 3.448 1.99998 4 1.99998H8.586C8.718 1.99998 8.847 2.05398 8.94 2.14598L11.854 5.05998C11.947 5.15298 12 5.28198 12 5.41398V13ZM10 6.49998C10 6.77598 9.776 6.99998 9.5 6.99998H8V8.49998C8 8.77598 7.776 8.99998 7.5 8.99998C7.224 8.99998 7 8.77598 7 8.49998V6.99998H5.5C5.224 6.99998 5 6.77598 5 6.49998C5 6.22398 5.224 5.99998 5.5 5.99998H7V4.49998C7 4.22398 7.224 3.99998 7.5 3.99998C7.776 3.99998 8 4.22398 8 4.49998V5.99998H9.5C9.776 5.99998 10 6.22398 10 6.49998ZM10 11.5C10 11.776 9.776 12 9.5 12H5.5C5.224 12 5 11.776 5 11.5C5 11.224 5.224 11 5.5 11H9.5C9.776 11 10 11.224 10 11.5Z"></path></svg>'},7830:_=>{_.exports='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 9C10.3425 9 9.00002 10.3425 9.00002 12C9.00002 13.6575 10.3425 15 12 15C13.6575 15 15 13.6575 15 12C15 10.3425 13.6575 9 12 9ZM12 13.5C11.172 13.5 10.5 12.828 10.5 12C10.5 11.172 11.172 10.5 12 10.5C12.828 10.5 13.5 11.172 13.5 12C13.5 12.828 12.828 13.5 12 13.5ZM21.8475 14.5725L19.9185 12.942C19.8675 12.8985 19.8195 12.8505 19.776 12.7995C19.332 12.279 19.3965 11.5005 19.9185 11.058L21.8475 9.4275C22.0395 9.2655 22.113 9.0045 22.0365 8.766C21.579 7.3545 20.823 6.06 19.8285 4.962C19.7085 4.83 19.5405 4.758 19.368 4.758C19.2975 4.758 19.227 4.77 19.1595 4.794L16.779 5.6415C16.716 5.664 16.65 5.682 16.584 5.694C16.509 5.7075 16.434 5.715 16.3605 5.715C15.7725 5.715 15.2505 5.298 15.141 4.701L14.6865 2.223C14.6415 1.977 14.451 1.782 14.205 1.7295C13.485 1.5765 12.7485 1.5 12.0015 1.5C11.2545 1.5 10.5165 1.578 9.79652 1.7295C9.55052 1.782 9.36002 1.977 9.31502 2.223L8.86202 4.701C8.85002 4.767 8.83202 4.8315 8.80952 4.8945C8.62802 5.4 8.15102 5.715 7.64102 5.715C7.50302 5.715 7.36202 5.691 7.22402 5.643L4.84352 4.7955C4.77602 4.7715 4.70402 4.7595 4.63502 4.7595C4.46252 4.7595 4.29452 4.8315 4.17452 4.9635C3.17852 6.0615 2.42402 7.356 1.96502 8.7675C1.88702 9.006 1.96202 9.267 2.15402 9.429L4.08302 11.0595C4.13402 11.103 4.18202 11.151 4.22552 11.202C4.66952 11.7225 4.60502 12.501 4.08302 12.9435L2.15402 14.574C1.96202 14.736 1.88852 14.997 1.96502 15.2355C2.42252 16.647 3.17852 17.9415 4.17452 19.0395C4.29452 19.1715 4.46252 19.2435 4.63502 19.2435C4.70552 19.2435 4.77602 19.2315 4.84352 19.2075L7.22402 18.36C7.28702 18.3375 7.35302 18.3195 7.41902 18.3075C7.49402 18.294 7.56902 18.288 7.64252 18.288C8.23052 18.288 8.75252 18.705 8.86202 19.302L9.31502 21.78C9.36002 22.026 9.55052 22.221 9.79652 22.2735C10.5165 22.4265 11.2545 22.503 12.0015 22.503C12.7485 22.503 13.4865 22.425 14.205 22.2735C14.451 22.221 14.6415 22.026 14.6865 21.78L15.141 19.302C15.153 19.236 15.171 19.1715 15.1935 19.1085C15.375 18.603 15.852 18.288 16.362 18.288C16.5 18.288 16.641 18.312 16.779 18.36L19.158 19.2075C19.227 19.2315 19.2975 19.2435 19.3665 19.2435C19.539 19.2435 19.707 19.1715 19.827 19.0395C20.823 17.9415 21.5775 16.647 22.035 15.2355C22.113 14.997 22.038 14.736 21.846 14.574L21.8475 14.5725ZM19.092 17.589L17.2815 16.944C16.9845 16.839 16.6755 16.785 16.362 16.785C15.2085 16.785 14.1705 17.514 13.782 18.5985C13.731 18.738 13.6935 18.882 13.6665 19.029L13.3215 20.9055C12.8865 20.9685 12.444 21 12.0015 21C11.559 21 11.1165 20.9685 10.68 20.904L10.3365 19.0275C10.098 17.727 8.96552 16.7835 7.64252 16.7835C7.48052 16.7835 7.31552 16.7985 7.14902 16.8285C7.00352 16.8555 6.86102 16.893 6.72002 16.9425L4.90952 17.5875C4.35752 16.896 3.91652 16.1385 3.59102 15.321L5.05202 14.0865C5.61152 13.614 5.95202 12.951 6.01202 12.222C6.07202 11.493 5.84252 10.785 5.36702 10.227C5.27102 10.1145 5.16452 10.008 5.05202 9.912L3.59102 8.6775C3.91652 7.86 4.35752 7.101 4.90952 6.411L6.72002 7.056C7.01702 7.161 7.32602 7.215 7.64102 7.215C8.79452 7.215 9.83252 6.486 10.221 5.4015C10.272 5.2605 10.3095 5.1165 10.3365 4.971L10.68 3.0945C11.1165 3.0315 11.559 2.9985 12.0015 2.9985C12.444 2.9985 12.8865 3.03 13.3215 3.093L13.665 4.9695C13.9035 6.27 15.036 7.2135 16.359 7.2135C16.521 7.2135 16.686 7.1985 16.851 7.1685C16.9965 7.1415 17.1405 7.104 17.2815 7.0545L19.092 6.4095C19.644 7.0995 20.085 7.8585 20.4105 8.676L18.951 9.9105C18.3915 10.383 18.0495 11.046 17.991 11.775C17.931 12.504 18.1605 13.2135 18.636 13.77C18.7335 13.884 18.8385 13.989 18.9525 14.085L20.4135 15.3195C20.088 16.137 19.647 16.896 19.095 17.586L19.092 17.589Z"></path></svg>'},3072:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8 1C4.14 1 1 4.14 1 8C1 11.86 4.14 15 8 15C11.86 15 15 11.86 15 8C15 4.14 11.86 1 8 1ZM8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14ZM10.854 5.146C11.049 5.341 11.049 5.658 10.854 5.853L5.854 10.853C5.756 10.951 5.628 10.999 5.5 10.999C5.372 10.999 5.244 10.95 5.146 10.853C4.951 10.658 4.951 10.341 5.146 10.146L10.146 5.146C10.341 4.951 10.658 4.951 10.853 5.146H10.854Z"></path></svg>'},6193:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M5.46524 9.82962C5.62134 9.94037 5.80806 9.99974 5.99946 9.99948C6.19151 10.0003 6.37897 9.94082 6.53546 9.82948C6.69223 9.71378 6.81095 9.55398 6.87646 9.37048L7.22346 8.30348C7.3077 8.05191 7.44906 7.82327 7.63646 7.63548C7.82305 7.44851 8.05078 7.30776 8.30146 7.22448L9.38746 6.87148C9.56665 6.80759 9.72173 6.68989 9.83146 6.53448C9.94145 6.37908 10.0005 6.19337 10.0005 6.00298C10.0005 5.81259 9.94145 5.62689 9.83146 5.47148C9.71293 5.30613 9.54426 5.18339 9.35046 5.12148L8.28146 4.77548C8.02989 4.69238 7.80123 4.55163 7.61371 4.36447C7.4262 4.1773 7.28503 3.9489 7.20146 3.69748L6.84846 2.61348C6.78519 2.43423 6.66777 2.27908 6.51246 2.16948C6.35557 2.06133 6.16951 2.00342 5.97896 2.00342C5.78841 2.00342 5.60235 2.06133 5.44546 2.16948C5.28572 2.28196 5.16594 2.44237 5.10346 2.62748L4.74846 3.71748C4.66476 3.96155 4.52691 4.18351 4.34524 4.36673C4.16358 4.54996 3.9428 4.6897 3.69946 4.77548L2.61546 5.12648C2.43437 5.19048 2.27775 5.30937 2.16743 5.4666C2.05712 5.62383 1.99859 5.81155 2.00003 6.00361C2.00146 6.19568 2.06277 6.38251 2.17541 6.53808C2.28806 6.69364 2.44643 6.81019 2.62846 6.87148L3.69546 7.21848C3.94767 7.30297 4.17673 7.44506 4.36446 7.63348C4.41519 7.6837 4.46262 7.73715 4.50646 7.79348C4.62481 7.94615 4.71614 8.11797 4.77646 8.30148L5.12846 9.38148C5.19143 9.56222 5.30914 9.71886 5.46524 9.82962ZM4.00746 6.26448L3.15246 5.99948L4.01646 5.71848C4.41071 5.58184 4.76826 5.35637 5.06146 5.05948C5.35281 4.76039 5.57294 4.39943 5.70546 4.00348L5.97046 3.14448L6.25046 4.00648C6.38349 4.40638 6.60809 4.76969 6.90636 5.06744C7.20463 5.36519 7.56833 5.58915 7.96846 5.72148L8.84846 5.99048L7.98746 6.27048C7.58707 6.40272 7.22321 6.62691 6.92505 6.92507C6.62689 7.22324 6.4027 7.58709 6.27046 7.98748L6.00546 8.84448L5.72646 7.98548C5.63026 7.69329 5.48483 7.41968 5.29646 7.17648C5.22699 7.08766 5.15254 7.00286 5.07346 6.92248C4.7738 6.62366 4.4089 6.39842 4.00746 6.26448ZM10.5344 13.8515C10.6703 13.9477 10.8328 13.9994 10.9994 13.9995C11.1642 13.998 11.3245 13.9456 11.4584 13.8495C11.5979 13.751 11.7029 13.611 11.7584 13.4495L12.0064 12.6875C12.0595 12.529 12.1485 12.385 12.2664 12.2665C12.3837 12.148 12.5277 12.0592 12.6864 12.0075L13.4584 11.7555C13.6161 11.701 13.7528 11.5985 13.8494 11.4625C13.9227 11.3595 13.9706 11.2405 13.9891 11.1154C14.0076 10.9903 13.9962 10.8626 13.9558 10.7428C13.9154 10.623 13.8472 10.5144 13.7567 10.4261C13.6662 10.3377 13.5561 10.272 13.4354 10.2345L12.6714 9.98548C12.5132 9.93291 12.3695 9.8443 12.2514 9.72663C12.1334 9.60896 12.0444 9.46547 11.9914 9.30748L11.7394 8.53348C11.685 8.37623 11.5825 8.24011 11.4464 8.14448C11.3443 8.07153 11.2266 8.02359 11.1026 8.00453C10.9787 7.98547 10.8519 7.99582 10.7327 8.03475C10.6135 8.07369 10.5051 8.1401 10.4163 8.22865C10.3274 8.31719 10.2607 8.42538 10.2214 8.54448L9.97435 9.30648C9.92207 9.46413 9.83452 9.60777 9.71835 9.72648C9.60382 9.84272 9.46428 9.9313 9.31035 9.98548L8.53435 10.2385C8.41689 10.2793 8.31057 10.347 8.22382 10.4361C8.13708 10.5252 8.0723 10.6333 8.03464 10.7518C7.99698 10.8704 7.98746 10.996 8.00686 11.1189C8.02625 11.2417 8.07401 11.3583 8.14635 11.4595C8.24456 11.5993 8.38462 11.7044 8.54635 11.7595L9.30935 12.0065C9.46821 12.0599 9.61262 12.1492 9.73135 12.2675C9.84958 12.3857 9.93801 12.5304 9.98935 12.6895L10.2424 13.4635C10.2971 13.6199 10.3992 13.7555 10.5344 13.8515ZM9.62035 11.0585L9.44235 10.9995L9.62635 10.9355C9.92811 10.8305 10.2018 10.6578 10.4264 10.4305C10.6528 10.2015 10.8238 9.92374 10.9264 9.61848L10.9844 9.44048L11.0434 9.62148C11.1453 9.92819 11.3175 10.2069 11.5461 10.4353C11.7748 10.6638 12.0536 10.8357 12.3604 10.9375L12.5554 11.0005L12.3754 11.0595C12.068 11.1617 11.7888 11.3344 11.5601 11.5637C11.3314 11.7931 11.1596 12.0728 11.0584 12.3805L10.9994 12.5615L10.9414 12.3805C10.84 12.0721 10.6676 11.7919 10.4382 11.5623C10.2088 11.3326 9.92863 11.1601 9.62035 11.0585Z"></path></svg>'},6670:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M6 5C5.44772 5 5 5.44772 5 6V10C5 10.5523 5.44772 11 6 11H10C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5H6ZM1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z"></path></svg>'},3884:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path shape-rendering="optimizeQuality" d="M7.14645 0.646447C7.34171 0.451184 7.65829 0.451184 7.85355 0.646447L9.35355 2.14645C9.54882 2.34171 9.54882 2.65829 9.35355 2.85355L7.85355 4.35355C7.65829 4.54882 7.34171 4.54882 7.14645 4.35355C6.95118 4.15829 6.95118 3.84171 7.14645 3.64645L7.7885 3.00439C5.12517 3.11522 3 5.30943 3 8C3 9.56799 3.72118 10.9672 4.85185 11.8847C5.06627 12.0587 5.09904 12.3736 4.92503 12.588C4.75103 12.8024 4.43615 12.8352 4.22172 12.6612C2.86712 11.5619 2 9.88205 2 8C2 4.75447 4.57689 2.1108 7.79629 2.00339L7.14645 1.35355C6.95118 1.15829 6.95118 0.841709 7.14645 0.646447ZM11.075 3.41199C11.249 3.19756 11.5639 3.1648 11.7783 3.3388C13.1329 4.43806 14 6.11795 14 8C14 11.2455 11.4231 13.8892 8.20371 13.9966L8.85355 14.6464C9.04882 14.8417 9.04882 15.1583 8.85355 15.3536C8.65829 15.5488 8.34171 15.5488 8.14645 15.3536L6.64645 13.8536C6.55268 13.7598 6.5 13.6326 6.5 13.5C6.5 13.3674 6.55268 13.2402 6.64645 13.1464L8.14645 11.6464C8.34171 11.4512 8.65829 11.4512 8.85355 11.6464C9.04882 11.8417 9.04882 12.1583 8.85355 12.3536L8.2115 12.9956C10.8748 12.8848 13 10.6906 13 8C13 6.43201 12.2788 5.03283 11.1482 4.1153C10.9337 3.94129 10.901 3.62641 11.075 3.41199Z"></path></svg>'},4147:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11 6C10.4477 6 10 5.55228 10 5C10 4.44772 10.4477 4 11 4C11.5523 4 12 4.44772 12 5C12 5.55228 11.5523 6 11 6ZM2.58722 10.1357C1.80426 9.3566 1.80426 8.0934 2.58722 7.31428L7.32688 2.59785C7.70082 2.22574 8.20735 2.01572 8.73617 2.01353L11.9867 2.00002C13.1029 1.99538 14.008 2.89877 13.9999 4.00947L13.9755 7.3725C13.9717 7.89662 13.7608 8.3982 13.3884 8.76882L8.71865 13.4157C7.93569 14.1948 6.66627 14.1948 5.88331 13.4157L2.58722 10.1357ZM3.29605 8.01964C2.90458 8.4092 2.90458 9.0408 3.29606 9.43036L6.59214 12.7103C6.98362 13.0999 7.61834 13.0999 8.00982 12.7103L12.6795 8.06346C12.8658 7.87815 12.9712 7.62736 12.9731 7.3653L12.9975 4.00227C13.0016 3.44692 12.549 2.99522 11.9909 2.99754L8.74036 3.01105C8.47595 3.01215 8.22268 3.11716 8.03571 3.30321L3.29605 8.01964Z"></path></svg>'},7858:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4.85401 2.14649C5.04901 2.34149 5.04901 2.65849 4.85401 2.85349L2.85401 4.85349C2.65901 5.04849 2.34201 5.04849 2.14701 4.85349L1.14701 3.85349C0.952013 3.65849 0.952013 3.34149 1.14701 3.14649C1.34201 2.95149 1.65901 2.95149 1.85401 3.14649L2.50001 3.79249L4.14601 2.14649C4.34101 1.95149 4.65901 1.95149 4.85401 2.14649ZM14.5 4.00049H6.50001C6.22401 4.00049 6.00001 3.77649 6.00001 3.50049C6.00001 3.22449 6.22401 3.00049 6.50001 3.00049H14.5C14.776 3.00049 15 3.22449 15 3.50049C15 3.77649 14.776 4.00049 14.5 4.00049ZM4.85401 11.1465C5.04901 11.3415 5.04901 11.6585 4.85401 11.8535L2.85401 13.8535C2.65901 14.0485 2.34201 14.0485 2.14701 13.8535L1.14701 12.8535C0.952013 12.6585 0.952013 12.3415 1.14701 12.1465C1.34201 11.9515 1.65901 11.9515 1.85401 12.1465L2.50001 12.7925L4.14601 11.1465C4.34101 10.9515 4.65901 10.9515 4.85401 11.1465ZM14.5 13.0005H6.50001C6.22401 13.0005 6.00001 12.7765 6.00001 12.5005C6.00001 12.2245 6.22401 12.0005 6.50001 12.0005H14.5C14.776 12.0005 15 12.2245 15 12.5005C15 12.7765 14.776 13.0005 14.5 13.0005ZM4.85401 6.64649C5.04901 6.84149 5.04901 7.15849 4.85401 7.35349L2.85401 9.35349C2.65901 9.54849 2.34201 9.54849 2.14701 9.35349L1.14701 8.35349C0.952013 8.15849 0.952013 7.84149 1.14701 7.64649C1.34201 7.45149 1.65901 7.45149 1.85401 7.64649L2.50001 8.29249L4.14601 6.64649C4.34101 6.45149 4.65901 6.45149 4.85401 6.64649ZM14.5 8.50049H6.50001C6.22401 8.50049 6.00001 8.27649 6.00001 8.00049C6.00001 7.72449 6.22401 7.50049 6.50001 7.50049H14.5C14.776 7.50049 15 7.72449 15 8.00049C15 8.27649 14.776 8.50049 14.5 8.50049Z"></path></svg>'},8314:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M2 3.50049C2 3.22435 2.22386 3.00049 2.5 3.00049H13.5C13.7761 3.00049 14 3.22435 14 3.50049C14 3.77663 13.7761 4.00049 13.5 4.00049H2.5C2.22386 4.00049 2 3.77663 2 3.50049ZM2 7.50049C2 7.22435 2.22386 7.00049 2.5 7.00049H13.5C13.7761 7.00049 14 7.22435 14 7.50049C14 7.77663 13.7761 8.00049 13.5 8.00049H2.5C2.22386 8.00049 2 7.77663 2 7.50049ZM2 11.5005C2 11.2243 2.22386 11.0005 2.5 11.0005H13.5C13.7761 11.0005 14 11.2243 14 11.5005C14 11.7766 13.7761 12.0005 13.5 12.0005H2.5C2.22386 12.0005 2 11.7766 2 11.5005Z"></path></svg>'},3685:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M14 2H10C10 0.897 9.103 0 8 0C6.897 0 6 0.897 6 2H2C1.724 2 1.5 2.224 1.5 2.5C1.5 2.776 1.724 3 2 3H2.54L3.349 12.708C3.456 13.994 4.55 15 5.84 15H10.159C11.449 15 12.543 13.993 12.65 12.708L13.459 3H13.999C14.275 3 14.499 2.776 14.499 2.5C14.499 2.224 14.275 2 13.999 2H14ZM8 1C8.551 1 9 1.449 9 2H7C7 1.449 7.449 1 8 1ZM11.655 12.625C11.591 13.396 10.934 14 10.16 14H5.841C5.067 14 4.41 13.396 4.346 12.625L3.544 3H12.458L11.656 12.625H11.655ZM7 5.5V11.5C7 11.776 6.776 12 6.5 12C6.224 12 6 11.776 6 11.5V5.5C6 5.224 6.224 5 6.5 5C6.776 5 7 5.224 7 5.5ZM10 5.5V11.5C10 11.776 9.776 12 9.5 12C9.224 12 9 11.776 9 11.5V5.5C9 5.224 9.224 5 9.5 5C9.776 5 10 5.224 10 5.5Z"></path></svg>'},663:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M14.831 11.965L9.206 1.714C8.965 1.274 8.503 1 8 1C7.497 1 7.035 1.274 6.794 1.714L1.169 11.965C1.059 12.167 1 12.395 1 12.625C1 13.383 1.617 14 2.375 14H13.625C14.383 14 15 13.383 15 12.625C15 12.395 14.941 12.167 14.831 11.965ZM13.625 13H2.375C2.168 13 2 12.832 2 12.625C2 12.561 2.016 12.5 2.046 12.445L7.671 2.195C7.736 2.075 7.863 2 8 2C8.137 2 8.264 2.075 8.329 2.195L13.954 12.445C13.984 12.501 14 12.561 14 12.625C14 12.832 13.832 13 13.625 13ZM8.75 11.25C8.75 11.664 8.414 12 8 12C7.586 12 7.25 11.664 7.25 11.25C7.25 10.836 7.586 10.5 8 10.5C8.414 10.5 8.75 10.836 8.75 11.25ZM7.5 9V5.5C7.5 5.224 7.724 5 8 5C8.276 5 8.5 5.224 8.5 5.5V9C8.5 9.276 8.276 9.5 8 9.5C7.724 9.5 7.5 9.276 7.5 9Z"></path></svg>'},4339:_=>{_.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.807 2.265C13.228 1.532 12.313 1.141 11.083 1.004C9.877 0.870002 8.821 1.038 8.139 1.769C8.09 1.822 8.043 1.877 8 1.933C7.957 1.877 7.91 1.822 7.861 1.769C7.179 1.038 6.123 0.870002 4.917 1.004C3.687 1.141 2.772 1.532 2.193 2.265C1.628 2.981 1.5 3.879 1.5 4.75C1.5 5.322 1.553 5.897 1.754 6.405L1.586 7.243L1.52 7.276C0.588 7.742 0 8.694 0 9.736V11C0 11.24 0.086 11.438 0.156 11.567C0.231 11.704 0.325 11.828 0.415 11.933C0.595 12.143 0.819 12.346 1.02 12.513C1.225 12.684 1.427 12.836 1.577 12.943C1.816 13.116 2.062 13.275 2.318 13.423C2.625 13.6 3.066 13.832 3.614 14.065C4.391 14.395 5.404 14.722 6.553 14.887C6.203 14.377 5.931 13.809 5.751 13.202C5.173 13.055 4.645 12.873 4.201 12.684C3.717 12.479 3.331 12.274 3.067 12.123L3.002 12.085V7.824L3.025 7.709C3.515 7.919 4.1 8 4.752 8C5.898 8 6.812 7.672 7.462 7.009C7.681 6.785 7.859 6.535 8.002 6.266C8.049 6.354 8.106 6.436 8.16 6.52C8.579 6.238 9.038 6.013 9.522 5.843C9.26 5.52 9.077 5.057 8.996 4.407C8.879 3.471 9.034 3.011 9.238 2.793C9.431 2.586 9.875 2.379 10.919 2.495C11.939 2.608 12.398 2.899 12.632 3.195C12.879 3.508 13.002 3.984 13.002 4.75C13.002 5.158 12.967 5.453 12.909 5.674C13.398 5.792 13.865 5.967 14.3 6.197C14.443 5.741 14.502 5.248 14.502 4.75C14.502 3.879 14.374 2.981 13.809 2.265H13.807ZM7.006 4.407C6.915 5.133 6.704 5.637 6.388 5.959C6.089 6.264 5.604 6.5 4.75 6.5C3.828 6.5 3.47 6.301 3.308 6.12C3.129 5.92 3 5.542 3 4.75C3 3.984 3.123 3.508 3.37 3.195C3.604 2.899 4.063 2.609 5.083 2.495C6.127 2.379 6.571 2.586 6.764 2.793C6.968 3.011 7.123 3.471 7.006 4.407Z" fill="currentColor"></path><path d="M11.5 7C9.015 7 7 9.015 7 11.5C7 13.985 9.015 16 11.5 16C13.985 16 16 13.985 16 11.5C16 9.015 13.985 7 11.5 7ZM13.854 13.146L13.147 13.853L11.501 12.207L9.855 13.853L9.148 13.146L10.794 11.5L9.148 9.854L9.855 9.147L11.501 10.793L13.147 9.147L13.854 9.854L12.208 11.5L13.854 13.146Z" fill="var(--vscode-list-errorForeground, currentColor)"></path></svg>'},8726:_=>{_.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.807 2.265C13.228 1.532 12.313 1.141 11.083 1.004C9.877 0.870002 8.821 1.038 8.139 1.769C8.09 1.822 8.043 1.877 8 1.933C7.957 1.877 7.91 1.822 7.861 1.769C7.179 1.038 6.123 0.870002 4.917 1.004C3.687 1.141 2.772 1.532 2.193 2.265C1.628 2.981 1.5 3.879 1.5 4.75C1.5 5.322 1.553 5.897 1.754 6.405L1.586 7.243L1.52 7.276C0.588 7.742 0 8.694 0 9.736V11C0 11.24 0.086 11.438 0.156 11.567C0.231 11.704 0.325 11.828 0.415 11.933C0.595 12.143 0.819 12.346 1.02 12.513C1.225 12.684 1.427 12.836 1.577 12.943C1.816 13.116 2.062 13.275 2.318 13.423C2.625 13.6 3.066 13.832 3.614 14.065C4.391 14.395 5.404 14.722 6.553 14.887C6.203 14.377 5.931 13.809 5.751 13.202C5.173 13.055 4.645 12.873 4.201 12.684C3.717 12.479 3.331 12.274 3.067 12.123L3.002 12.085V7.824L3.025 7.709C3.515 7.919 4.1 8 4.752 8C5.898 8 6.812 7.672 7.462 7.009C7.681 6.785 7.859 6.535 8.002 6.266C8.049 6.354 8.106 6.436 8.16 6.52C8.579 6.238 9.038 6.013 9.522 5.843C9.26 5.52 9.077 5.057 8.996 4.407C8.879 3.471 9.034 3.011 9.238 2.793C9.431 2.586 9.875 2.379 10.919 2.495C11.939 2.608 12.398 2.899 12.632 3.195C12.879 3.508 13.002 3.984 13.002 4.75C13.002 5.158 12.967 5.453 12.909 5.674C13.398 5.792 13.865 5.967 14.3 6.197C14.443 5.741 14.502 5.248 14.502 4.75C14.502 3.879 14.374 2.981 13.809 2.265H13.807ZM7.006 4.407C6.915 5.133 6.704 5.637 6.388 5.959C6.089 6.264 5.604 6.5 4.75 6.5C3.828 6.5 3.47 6.301 3.308 6.12C3.129 5.92 3 5.542 3 4.75C3 3.984 3.123 3.508 3.37 3.195C3.604 2.899 4.063 2.609 5.083 2.495C6.127 2.379 6.571 2.586 6.764 2.793C6.968 3.011 7.123 3.471 7.006 4.407Z" fill="currentColor"></path><path d="M11.5 7C9.015 7 7 9.015 7 11.5C7 13.985 9.015 16 11.5 16C13.985 16 16 13.985 16 11.5C16 9.015 13.985 7 11.5 7ZM11.5 14.25C10.963 14.25 10.445 14.105 10 13.844V14.5H9V12.5L9.5 12H11.5V13H10.536C10.823 13.16 11.155 13.25 11.5 13.25C12.177 13.25 12.805 12.907 13.137 12.354L13.994 12.87C13.481 13.722 12.525 14.25 11.5 14.25ZM14 10.5L13.5 11H11.5V10H12.464C12.177 9.84 11.845 9.75 11.5 9.75C10.823 9.75 10.195 10.093 9.863 10.646L9.006 10.13C9.519 9.278 10.475 8.75 11.5 8.75C12.037 8.75 12.555 8.895 13 9.156V8.5H14V10.5Z" fill="var(--vscode-editorWarning-foreground, currentColor)"></path></svg>'},9336:_=>{_.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.807 2.265C13.228 1.532 12.313 1.141 11.083 1.004C9.877 0.870002 8.821 1.038 8.139 1.769C8.09 1.822 8.043 1.877 8 1.933C7.957 1.877 7.91 1.822 7.861 1.769C7.179 1.038 6.123 0.870002 4.917 1.004C3.687 1.141 2.772 1.532 2.193 2.265C1.628 2.981 1.5 3.879 1.5 4.75C1.5 5.322 1.553 5.897 1.754 6.405L1.586 7.243L1.52 7.276C0.588 7.742 0 8.694 0 9.736V11C0 11.24 0.086 11.438 0.156 11.567C0.231 11.704 0.325 11.828 0.415 11.933C0.595 12.143 0.819 12.346 1.02 12.513C1.225 12.684 1.427 12.836 1.577 12.943C1.816 13.116 2.062 13.275 2.318 13.423C2.625 13.6 3.066 13.832 3.614 14.065C4.391 14.395 5.404 14.722 6.553 14.887C6.203 14.377 5.931 13.809 5.751 13.202C5.173 13.055 4.645 12.873 4.201 12.684C3.717 12.479 3.331 12.274 3.067 12.123L3.002 12.085V7.824L3.025 7.709C3.515 7.919 4.1 8 4.752 8C5.898 8 6.812 7.672 7.462 7.009C7.681 6.785 7.859 6.535 8.002 6.266C8.049 6.354 8.106 6.436 8.16 6.52C8.579 6.238 9.038 6.013 9.522 5.843C9.26 5.52 9.077 5.057 8.996 4.407C8.879 3.471 9.034 3.011 9.238 2.793C9.431 2.586 9.875 2.379 10.919 2.495C11.939 2.608 12.398 2.899 12.632 3.195C12.879 3.508 13.002 3.984 13.002 4.75C13.002 5.158 12.967 5.453 12.909 5.674C13.398 5.792 13.865 5.967 14.3 6.197C14.443 5.741 14.502 5.248 14.502 4.75C14.502 3.879 14.374 2.981 13.809 2.265H13.807ZM7.006 4.407C6.915 5.133 6.704 5.637 6.388 5.959C6.089 6.264 5.604 6.5 4.75 6.5C3.828 6.5 3.47 6.301 3.308 6.12C3.129 5.92 3 5.542 3 4.75C3 3.984 3.123 3.508 3.37 3.195C3.604 2.899 4.063 2.609 5.083 2.495C6.127 2.379 6.571 2.586 6.764 2.793C6.968 3.011 7.123 3.471 7.006 4.407Z" fill="currentColor"></path><path d="M11.5 7C9.015 7 7 9.015 7 11.5C7 13.985 9.015 16 11.5 16C13.985 16 16 13.985 16 11.5C16 9.015 13.985 7 11.5 7ZM11.393 13.309L10.7 13.401L8.7 11.901L9.3 11.1L10.909 12.307L13.357 9.192L14.143 9.809L11.393 13.309Z" fill="var(--vscode-notebookStatusSuccessIcon-foreground, currentColor)"></path></svg>'},8440:_=>{_.exports='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:evenodd;fill:#FFFFFF;fill-opacity:1;" d="M 14 0 C 6.265625 0 0 6.265625 0 14 C 0 20.195312 4.007812 25.425781 9.574219 27.285156 C 10.273438 27.402344 10.535156 26.984375 10.535156 26.617188 C 10.535156 26.285156 10.515625 25.183594 10.515625 24.011719 C 7 24.660156 6.089844 23.152344 5.808594 22.363281 C 5.652344 21.960938 4.972656 20.722656 4.375 20.386719 C 3.886719 20.125 3.183594 19.476562 4.359375 19.460938 C 5.460938 19.441406 6.246094 20.476562 6.511719 20.894531 C 7.769531 23.011719 9.785156 22.417969 10.585938 22.050781 C 10.710938 21.140625 11.078125 20.527344 11.480469 20.175781 C 8.363281 19.828125 5.109375 18.621094 5.109375 13.265625 C 5.109375 11.742188 5.652344 10.484375 6.546875 9.503906 C 6.402344 9.152344 5.914062 7.714844 6.683594 5.792969 C 6.683594 5.792969 7.859375 5.425781 10.535156 7.226562 C 11.652344 6.914062 12.847656 6.753906 14.035156 6.753906 C 15.226562 6.753906 16.414062 6.914062 17.535156 7.226562 C 20.210938 5.410156 21.386719 5.792969 21.386719 5.792969 C 22.152344 7.714844 21.664062 9.152344 21.523438 9.503906 C 22.417969 10.484375 22.960938 11.726562 22.960938 13.265625 C 22.960938 18.636719 19.6875 19.828125 16.574219 20.175781 C 17.078125 20.613281 17.515625 21.453125 17.515625 22.765625 C 17.515625 24.640625 17.5 26.144531 17.5 26.617188 C 17.5 26.984375 17.761719 27.421875 18.460938 27.285156 C 24.160156 25.359375 27.996094 20.015625 28 14 C 28 6.265625 21.734375 0 14 0 Z M 14 0 "></path></g></svg>'}},hi={};function te(_){var k=hi[_];if(k!==void 0)return k.exports;var U=hi[_]={id:_,exports:{}};return zl[_].call(U.exports,U,U.exports,te),U.exports}i(te,"__webpack_require__"),te.n=_=>{var k=_&&_.__esModule?()=>_.default:()=>_;return te.d(k,{a:k}),k},te.d=(_,k)=>{for(var U in k)te.o(k,U)&&!te.o(_,U)&&Object.defineProperty(_,U,{enumerable:!0,get:k[U]})},te.o=(_,k)=>Object.prototype.hasOwnProperty.call(_,k),te.nc=void 0;var lc={};(()=>{"use strict";var an;var _=te(5072),k=te.n(_),U=te(7825),K=te.n(U),V=te(7659),T=te.n(V),v=te(5056),h=te.n(v),D=te(540),A=te.n(D),B=te(1113),H=te.n(B),X=te(2410),Y={};Y.styleTagTransform=H(),Y.setAttributes=h(),Y.insert=T().bind(null,"head"),Y.domAPI=K(),Y.insertStyleElement=A();var Pe=k()(X.A,Y);const Ie=X.A&&X.A.locals?X.A.locals:void 0;var fe=te(3554),Oe={};Oe.styleTagTransform=H(),Oe.setAttributes=h(),Oe.insert=T().bind(null,"head"),Oe.domAPI=K(),Oe.insertStyleElement=A();var lt=k()(fe.A,Oe);const W=fe.A&&fe.A.locals?fe.A.locals:void 0;var R=te(7334),l=te(6540),oe=te(961);const I=i(({className:r="",src:a,title:u})=>l.createElement("span",{className:`icon ${r}`,title:u,dangerouslySetInnerHTML:{__html:a}}),"Icon"),q=null,O=l.createElement(I,{src:te(7290)}),F=l.createElement(I,{src:te(5898)}),ie=l.createElement(I,{src:te(2631),className:"check"}),G=l.createElement(I,{src:te(8251)}),ae=l.createElement(I,{src:te(8674),className:"pending"}),ce=l.createElement(I,{src:te(1019),className:"close"}),he=l.createElement(I,{src:te(7548)}),ve=l.createElement(I,{src:te(5787)}),De=l.createElement(I,{src:te(6270)}),He=l.createElement(I,{src:te(4837)}),Xe=l.createElement(I,{src:te(5473)}),Je=l.createElement(I,{src:te(1456)}),ct=l.createElement(I,{src:te(979)}),Et=l.createElement(I,{src:te(425)}),dt=l.createElement(I,{src:te(2400)}),je=l.createElement(I,{src:te(9494)}),j=l.createElement(I,{src:te(4551)}),ne=l.createElement(I,{src:te(9301)}),xe=l.createElement(I,{src:te(4593)}),w=l.createElement(I,{className:"loading",src:te(2775)}),P=l.createElement(I,{src:te(3689)}),pe=l.createElement(I,{src:te(4826)}),Me=l.createElement(I,{src:te(4468)}),ke=l.createElement(I,{src:te(4759)}),Be=l.createElement(I,{src:te(6276)}),gt=l.createElement(I,{src:te(7830)}),Te=l.createElement(I,{src:te(6193)}),Fe=l.createElement(I,{src:te(6670)}),Lt=l.createElement(I,{src:te(3884)}),gi=l.createElement(I,{src:te(4147)}),Ot=l.createElement(I,{src:te(7858)}),ho=l.createElement(I,{src:te(8314)}),jl=l.createElement(I,{src:te(3685)}),vt=l.createElement(I,{src:te(663)}),go=l.createElement(I,{src:te(7907)}),Mn=l.createElement(I,{src:te(3072),className:"skip"}),hn=l.createElement(I,{className:"copilot-icon",src:te(4339)}),vi=l.createElement(I,{className:"copilot-icon",src:te(8726)}),Rr=l.createElement(I,{className:"copilot-icon",src:te(9336)});function Ci(){const[r,a]=(0,l.useState)([0,0]);return(0,l.useLayoutEffect)(()=>{function u(){a([window.innerWidth,window.innerHeight])}return i(u,"updateSize"),window.addEventListener("resize",u),u(),()=>window.removeEventListener("resize",u)},[]),r}i(Ci,"useWindowSize");const Pr=i(({optionsContext:r,defaultOptionLabel:a,defaultOptionValue:u,defaultAction:c,allOptions:d,optionsTitle:p,disabled:C,hasSingleAction:y,spreadable:E,isSecondary:L})=>{const[Q,$]=(0,l.useState)(!1),ee=i(z=>{z.target instanceof HTMLElement&&z.target.classList.contains("split-right")||$(!1)},"onHideAction");(0,l.useEffect)(()=>{const z=i(we=>ee(we),"onClickOrKey");Q?(document.addEventListener("click",z),document.addEventListener("keydown",z)):(document.removeEventListener("click",z),document.removeEventListener("keydown",z))},[Q,$]);const me=(0,l.useRef)();return Ci(),l.createElement("div",{className:`dropdown-container${E?" spreadable":""}`,ref:me},me.current&&E&&me.current.clientWidth>375&&d&&!y?d().map(({label:z,value:we,action:ue,optionDisabled:Se})=>l.createElement("button",{className:"inlined-dropdown",key:we,title:z,disabled:Se||C,onClick:ue,value:we},z)):l.createElement("div",{className:"primary-split-button"},l.createElement("button",{className:`split-left${L?" secondary":""}`,disabled:C,onClick:c,value:u(),title:typeof a()=="string"?a():p},a()),y?null:l.createElement("div",{className:`split${L?" secondary":""}${C?" disabled":""}`},l.createElement("div",{className:`separator${C?" disabled":""}`})),y?null:l.createElement("button",{className:`split-right${L?" secondary":""}`,title:p,disabled:C,"aria-expanded":Q,onClick:i(z=>{z.preventDefault();const we=z.target.getBoundingClientRect(),ue=we.left,Se=we.bottom;z.target.dispatchEvent(new MouseEvent("contextmenu",{bubbles:!0,clientX:ue,clientY:Se})),z.stopPropagation()},"onClick"),onMouseDown:i(()=>$(!0),"onMouseDown"),onKeyDown:i(z=>{(z.key==="Enter"||z.key===" ")&&$(!0)},"onKeyDown"),"data-vscode-context":r()},G)))},"contextDropdown_ContextDropdown"),at="\xA0",vo=i(({children:r})=>{const a=l.Children.count(r);return l.createElement(l.Fragment,{children:l.Children.map(r,(u,c)=>typeof u=="string"?`${c>0?at:""}${u}${c<a-1&&typeof r[c+1]!="string"?at:""}`:u)})},"Spaced");var Co=te(7975),yo=te(4353),Tn=te.n(yo),yi=te(6279),wi=te.n(yi),xi=te(3581),er=te.n(xi),Ul=Object.defineProperty,Zt=i((r,a,u)=>a in r?Ul(r,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[a]=u,"__defNormalProp"),Or=i((r,a,u)=>Zt(r,typeof a!="symbol"?a+"":a,u),"__publicField");function Gt(r){return{dispose:r}}i(Gt,"toDisposable");function Wl(r){return Gt(()=>Ei(r))}i(Wl,"lifecycle_combinedDisposable");function Ei(r){for(;r.length;){const a=r.pop();a==null||a.dispose()}}i(Ei,"disposeAll");function wo(r,a){return a.push(r),r}i(wo,"addDisposable");const Wn=class Wn{constructor(){Or(this,"_isDisposed",!1),Or(this,"_disposables",[])}dispose(){this._isDisposed||(this._isDisposed=!0,Ei(this._disposables),this._disposables=[])}_register(a){return this._isDisposed?a.dispose():this._disposables.push(a),a}get isDisposed(){return this._isDisposed}};i(Wn,"Disposable");let xo=Wn;var Eo=Object.defineProperty,bi=i((r,a,u)=>a in r?Eo(r,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[a]=u,"utils_defNormalProp"),et=i((r,a,u)=>bi(r,typeof a!="symbol"?a+"":a,u),"utils_publicField");Tn().extend(wi(),{thresholds:[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:6,d:"day"},{l:"w",r:7},{l:"ww",r:3,d:"week"},{l:"M",r:4},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}]}),Tn().extend(er()),Tn().updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}});function ki(r,a){const u=Object.create(null);return r.filter(c=>{const d=a(c);return u[d]?!1:(u[d]=!0,!0)})}i(ki,"uniqBy");function Zl(...r){return(a,u=null,c)=>{const d=combinedDisposable(r.map(p=>p(C=>a.call(u,C))));return c&&c.push(d),d}}i(Zl,"anyEvent");function _i(r,a){return(u,c=null,d)=>r(p=>a(p)&&u.call(c,p),null,d)}i(_i,"filterEvent");function va(r){return(a,u=null,c)=>{const d=r(p=>(d.dispose(),a.call(u,p)),null,c);return d}}i(va,"onceEvent");function bo(r){return/^[a-zA-Z]:\\/.test(r)}i(bo,"isWindowsPath");function tr(r,a,u=sep){return r===a?!0:(r.charAt(r.length-1)!==u&&(r+=u),bo(r)&&(r=r.toLowerCase(),a=a.toLowerCase()),a.startsWith(r))}i(tr,"isDescendant");function Dr(r,a){return r.reduce((u,c)=>{const d=a(c);return u[d]=[...u[d]||[],c],u},Object.create(null))}i(Dr,"groupBy");const ro=class ro extends Error{constructor(a){super(`Unreachable case: ${a}`)}};i(ro,"UnreachableCaseError");let Ar=ro;function Si(r){return!!r.errors}i(Si,"isHookError");function Mi(r){let a=!0;if(r.errors&&Array.isArray(r.errors)){for(const u of r.errors)if(!u.field||!u.value||!u.status){a=!1;break}}else a=!1;return a}i(Mi,"hasFieldErrors");function ql(r){if(!(r instanceof Error))return typeof r=="string"?r:r.gitErrorCode?`${r.message}. Please check git output for more details`:r.stderr?`${r.stderr}. Please check git output for more details`:"Error";let a=r.message,u;if(r.message==="Validation Failed"&&Mi(r))u=r.errors.map(c=>`Value "${c.value}" cannot be set for field ${c.field} (code: ${c.status})`).join(", ");else{if(r.message.startsWith("Validation Failed:"))return r.message;if(Si(r)&&r.errors)return r.errors.map(c=>typeof c=="string"?c:c.message).join(", ")}return u&&(a=`${a}: ${u}`),a}i(ql,"formatError");async function Ql(r){return new Promise(a=>{const u=r(c=>{u.dispose(),a(c)})})}i(Ql,"asPromise");async function Ti(r,a){return Promise.race([r,new Promise(u=>{setTimeout(()=>u(void 0),a)})])}i(Ti,"promiseWithTimeout");function gn(r){const a=Tn()(r),u=Date.now();return a.diff(u,"month"),a.diff(u,"month")<1?a.fromNow():a.diff(u,"year")<1?`on ${a.format("MMM D")}`:`on ${a.format("MMM D, YYYY")}`}i(gn,"dateFromNow");function vn(r,a,u=!1){r.startsWith("#")&&(r=r.substring(1));const c=nr(r);if(a){const d=Nn(c.r,c.g,c.b),p=.6,C=.18,y=.3,E=(c.r*.2126+c.g*.7152+c.b*.0722)/255,L=Math.max(0,Math.min((E-p)*-1e3,1)),Q=(p-E)*100*L,$=nr(Ir(d.h,d.s,d.l+Q)),ee=`#${Ir(d.h,d.s,d.l+Q)}`,me=u?`#${Ln({...c,a:C})}`:`rgba(${c.r},${c.g},${c.b},${C})`,z=u?`#${Ln({...$,a:y})}`:`rgba(${$.r},${$.g},${$.b},${y})`;return{textColor:ee,backgroundColor:me,borderColor:z}}else return{textColor:`#${Li(c)}`,backgroundColor:`#${r}`,borderColor:`#${r}`}}i(vn,"utils_gitHubLabelColor");const Ln=i(r=>{const a=[r.r,r.g,r.b];return r.a&&a.push(Math.floor(r.a*255)),a.map(u=>u.toString(16).padStart(2,"0")).join("")},"rgbToHex");function nr(r){const a=/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:{r:0,g:0,b:0}}i(nr,"hexToRgb");function Nn(r,a,u){r/=255,a/=255,u/=255;let c=Math.min(r,a,u),d=Math.max(r,a,u),p=d-c,C=0,y=0,E=0;return p==0?C=0:d==r?C=(a-u)/p%6:d==a?C=(u-r)/p+2:C=(r-a)/p+4,C=Math.round(C*60),C<0&&(C+=360),E=(d+c)/2,y=p==0?0:p/(1-Math.abs(2*E-1)),y=+(y*100).toFixed(1),E=+(E*100).toFixed(1),{h:C,s:y,l:E}}i(Nn,"rgbToHsl");function Ir(r,a,u){const c=u/100,d=a*Math.min(c,1-c)/100,p=i(C=>{const y=(C+r/30)%12,E=c-d*Math.max(Math.min(y-3,9-y,1),-1);return Math.round(255*E).toString(16).padStart(2,"0")},"f");return`${p(0)}${p(8)}${p(4)}`}i(Ir,"hslToHex");function Li(r){return(.299*r.r+.587*r.g+.114*r.b)/255>.5?"000000":"ffffff"}i(Li,"contrastColor");var Hr=(r=>(r[r.Period=46]="Period",r[r.Slash=47]="Slash",r[r.A=65]="A",r[r.Z=90]="Z",r[r.Backslash=92]="Backslash",r[r.a=97]="a",r[r.z=122]="z",r))(Hr||{});function ko(r,a){return r<a?-1:r>a?1:0}i(ko,"compare");function Fr(r,a,u=0,c=r.length,d=0,p=a.length){for(;u<c&&d<p;u++,d++){const E=r.charCodeAt(u),L=a.charCodeAt(d);if(E<L)return-1;if(E>L)return 1}const C=c-u,y=p-d;return C<y?-1:C>y?1:0}i(Fr,"compareSubstring");function _o(r,a){return $r(r,a,0,r.length,0,a.length)}i(_o,"compareIgnoreCase");function $r(r,a,u=0,c=r.length,d=0,p=a.length){for(;u<c&&d<p;u++,d++){let E=r.charCodeAt(u),L=a.charCodeAt(d);if(E===L)continue;const Q=E-L;if(!(Q===32&&So(L))&&!(Q===-32&&So(E)))return Rn(E)&&Rn(L)?Q:Fr(r.toLowerCase(),a.toLowerCase(),u,c,d,p)}const C=c-u,y=p-d;return C<y?-1:C>y?1:0}i($r,"compareSubstringIgnoreCase");function Rn(r){return r>=97&&r<=122}i(Rn,"isLowerAsciiLetter");function So(r){return r>=65&&r<=90}i(So,"isUpperAsciiLetter");const oo=class oo{constructor(){et(this,"_value",""),et(this,"_pos",0)}reset(a){return this._value=a,this._pos=0,this}next(){return this._pos+=1,this}hasNext(){return this._pos<this._value.length-1}cmp(a){const u=a.charCodeAt(0),c=this._value.charCodeAt(this._pos);return u-c}value(){return this._value[this._pos]}};i(oo,"StringIterator");let rr=oo;const Zn=class Zn{constructor(a=!0){this._caseSensitive=a,et(this,"_value"),et(this,"_from"),et(this,"_to")}reset(a){return this._value=a,this._from=0,this._to=0,this.next()}hasNext(){return this._to<this._value.length}next(){this._from=this._to;let a=!0;for(;this._to<this._value.length;this._to++)if(this._value.charCodeAt(this._to)===46)if(a)this._from++;else break;else a=!1;return this}cmp(a){return this._caseSensitive?Fr(a,this._value,0,a.length,this._from,this._to):$r(a,this._value,0,a.length,this._from,this._to)}value(){return this._value.substring(this._from,this._to)}};i(Zn,"ConfigKeysIterator");let qt=Zn;const io=class io{constructor(a=!0,u=!0){this._splitOnBackslash=a,this._caseSensitive=u,et(this,"_value"),et(this,"_from"),et(this,"_to")}reset(a){return this._value=a.replace(/\\$|\/$/,""),this._from=0,this._to=0,this.next()}hasNext(){return this._to<this._value.length}next(){this._from=this._to;let a=!0;for(;this._to<this._value.length;this._to++){const u=this._value.charCodeAt(this._to);if(u===47||this._splitOnBackslash&&u===92)if(a)this._from++;else break;else a=!1}return this}cmp(a){return this._caseSensitive?Fr(a,this._value,0,a.length,this._from,this._to):$r(a,this._value,0,a.length,this._from,this._to)}value(){return this._value.substring(this._from,this._to)}};i(io,"PathIterator");let or=io;var Ni=(r=>(r[r.Scheme=1]="Scheme",r[r.Authority=2]="Authority",r[r.Path=3]="Path",r[r.Query=4]="Query",r[r.Fragment=5]="Fragment",r))(Ni||{});const ti=class ti{constructor(a){this._ignorePathCasing=a,et(this,"_pathIterator"),et(this,"_value"),et(this,"_states",[]),et(this,"_stateIdx",0)}reset(a){return this._value=a,this._states=[],this._value.scheme&&this._states.push(1),this._value.authority&&this._states.push(2),this._value.path&&(this._pathIterator=new or(!1,!this._ignorePathCasing(a)),this._pathIterator.reset(a.path),this._pathIterator.value()&&this._states.push(3)),this._value.query&&this._states.push(4),this._value.fragment&&this._states.push(5),this._stateIdx=0,this}next(){return this._states[this._stateIdx]===3&&this._pathIterator.hasNext()?this._pathIterator.next():this._stateIdx+=1,this}hasNext(){return this._states[this._stateIdx]===3&&this._pathIterator.hasNext()||this._stateIdx<this._states.length-1}cmp(a){if(this._states[this._stateIdx]===1)return _o(a,this._value.scheme);if(this._states[this._stateIdx]===2)return _o(a,this._value.authority);if(this._states[this._stateIdx]===3)return this._pathIterator.cmp(a);if(this._states[this._stateIdx]===4)return ko(a,this._value.query);if(this._states[this._stateIdx]===5)return ko(a,this._value.fragment);throw new Error}value(){if(this._states[this._stateIdx]===1)return this._value.scheme;if(this._states[this._stateIdx]===2)return this._value.authority;if(this._states[this._stateIdx]===3)return this._pathIterator.value();if(this._states[this._stateIdx]===4)return this._value.query;if(this._states[this._stateIdx]===5)return this._value.fragment;throw new Error}};i(ti,"UriIterator");let Mo=ti;function Kl(r){const u=r.extensionUri.path,c=u.lastIndexOf(".");return c===-1?!1:u.substr(c+1).length>1}i(Kl,"isPreRelease");const yr=class yr{constructor(){et(this,"segment"),et(this,"value"),et(this,"key"),et(this,"left"),et(this,"mid"),et(this,"right")}isEmpty(){return!this.left&&!this.mid&&!this.right&&!this.value}};i(yr,"TernarySearchTreeNode");let Dt=yr;const sn=class sn{constructor(a){et(this,"_iter"),et(this,"_root"),this._iter=a}static forUris(a=()=>!1){return new sn(new Mo(a))}static forPaths(){return new sn(new or)}static forStrings(){return new sn(new rr)}static forConfigKeys(){return new sn(new qt)}clear(){this._root=void 0}set(a,u){const c=this._iter.reset(a);let d;for(this._root||(this._root=new Dt,this._root.segment=c.value()),d=this._root;;){const C=c.cmp(d.segment);if(C>0)d.left||(d.left=new Dt,d.left.segment=c.value()),d=d.left;else if(C<0)d.right||(d.right=new Dt,d.right.segment=c.value()),d=d.right;else if(c.hasNext())c.next(),d.mid||(d.mid=new Dt,d.mid.segment=c.value()),d=d.mid;else break}const p=d.value;return d.value=u,d.key=a,p}get(a){var u;return(u=this._getNode(a))==null?void 0:u.value}_getNode(a){const u=this._iter.reset(a);let c=this._root;for(;c;){const d=u.cmp(c.segment);if(d>0)c=c.left;else if(d<0)c=c.right;else if(u.hasNext())u.next(),c=c.mid;else break}return c}has(a){const u=this._getNode(a);return!((u==null?void 0:u.value)===void 0&&(u==null?void 0:u.mid)===void 0)}delete(a){return this._delete(a,!1)}deleteSuperstr(a){return this._delete(a,!0)}_delete(a,u){const c=this._iter.reset(a),d=[];let p=this._root;for(;p;){const C=c.cmp(p.segment);if(C>0)d.push([1,p]),p=p.left;else if(C<0)d.push([-1,p]),p=p.right;else if(c.hasNext())c.next(),d.push([0,p]),p=p.mid;else{for(u?(p.left=void 0,p.mid=void 0,p.right=void 0):p.value=void 0;d.length>0&&p.isEmpty();){let[y,E]=d.pop();switch(y){case 1:E.left=void 0;break;case 0:E.mid=void 0;break;case-1:E.right=void 0;break}p=E}break}}}findSubstr(a){const u=this._iter.reset(a);let c=this._root,d;for(;c;){const p=u.cmp(c.segment);if(p>0)c=c.left;else if(p<0)c=c.right;else if(u.hasNext())u.next(),d=c.value||d,c=c.mid;else break}return c&&c.value||d}findSuperstr(a){const u=this._iter.reset(a);let c=this._root;for(;c;){const d=u.cmp(c.segment);if(d>0)c=c.left;else if(d<0)c=c.right;else if(u.hasNext())u.next(),c=c.mid;else return c.mid?this._entries(c.mid):void 0}}forEach(a){for(const[u,c]of this)a(c,u)}*[Symbol.iterator](){yield*this._entries(this._root)}*_entries(a){a&&(yield*this._entries(a.left),a.value&&(yield[a.key,a.value]),yield*this._entries(a.mid),yield*this._entries(a.right))}};i(sn,"TernarySearchTree");let Vr=sn;async function Br(r,a,u){const c=[];r.replace(a,(C,...y)=>{const E=u(C,...y);return c.push(E),""});const d=await Promise.all(c);let p=0;return r.replace(a,()=>d[p++])}i(Br,"stringReplaceAsync");async function Ca(r,a){for(let u=0;u<r.length;u++)if(await a(r[u],u,r))return u;return-1}i(Ca,"arrayFindIndexAsync");async function To(r,a,u){const c=Math.ceil(r.length/a);for(let d=0;d<c;d++){const p=r.slice(d*a,(d+1)*a);await Promise.all(p.map(u))}}i(To,"batchPromiseAll");function Ri(r){return r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}i(Ri,"escapeRegExp");function Yl(r,a,u="..."){return r.length<=a?r:`${r.substr(0,a)}${u}`}i(Yl,"truncate");const bt=i(({date:r,href:a})=>{const[u,c]=(0,l.useState)(gn(r)),d=typeof r=="string"?new Date(r).toLocaleString():r.toLocaleString();return(0,l.useEffect)(()=>{c(gn(r));const C=i(()=>{const $=Date.now(),ee=typeof r=="string"?new Date(r).getTime():r.getTime(),me=($-ee)/(1e3*60);return me<1?2e4:me<60?2*6e4:me<60*24?10*6e4:null},"getUpdateInterval")();if(C===null)return;let y;const E=i(()=>{document.visibilityState==="visible"&&c(gn(r))},"updateTimeString"),L=i(()=>{y=window.setInterval(E,C)},"startInterval"),Q=i(()=>{document.visibilityState==="visible"?(c(gn(r)),y&&clearInterval(y),L()):y&&clearInterval(y)},"handleVisibilityChange");return L(),document.addEventListener("visibilitychange",Q),()=>{y&&clearInterval(y),document.removeEventListener("visibilitychange",Q)}},[r]),a?l.createElement("a",{href:a,className:"timestamp",title:d},u):l.createElement("div",{className:"timestamp",title:d},u)},"Timestamp"),Gl=null;var Pi=(r=>(r[r.Query=0]="Query",r[r.All=1]="All",r[r.LocalPullRequest=2]="LocalPullRequest",r))(Pi||{}),Oi=(r=>(r.Approve="APPROVE",r.RequestChanges="REQUEST_CHANGES",r.Comment="COMMENT",r))(Oi||{}),Ct=(r=>(r.Open="OPEN",r.Merged="MERGED",r.Closed="CLOSED",r))(Ct||{}),kt=(r=>(r[r.Mergeable=0]="Mergeable",r[r.NotMergeable=1]="NotMergeable",r[r.Conflict=2]="Conflict",r[r.Unknown=3]="Unknown",r[r.Behind=4]="Behind",r))(kt||{}),Xt=(r=>(r[r.AwaitingChecks=0]="AwaitingChecks",r[r.Locked=1]="Locked",r[r.Mergeable=2]="Mergeable",r[r.Queued=3]="Queued",r[r.Unmergeable=4]="Unmergeable",r))(Xt||{}),Lo=(r=>(r.User="User",r.Organization="Organization",r.Mannequin="Mannequin",r.Bot="Bot",r))(Lo||{});function Di(r){switch(r){case"Organization":return"Organization";case"Mannequin":return"Mannequin";case"Bot":return"Bot";default:return"User"}}i(Di,"toAccountType");function At(r){var a;return zt(r)?r.id:(a=r.specialDisplayName)!=null?a:r.login}i(At,"reviewerId");function Bt(r){var a,u,c;return zt(r)?(u=(a=r.name)!=null?a:r.slug)!=null?u:r.id:(c=r.specialDisplayName)!=null?c:r.login}i(Bt,"reviewerLabel");function zt(r){return!!r.org}i(zt,"isITeam");function Cn(r){const a=r;return!!a.isAuthor&&!!a.isCommenter}i(Cn,"isISuggestedReviewer");var ir=(r=>(r.Issue="Issue",r.PullRequest="PullRequest",r))(ir||{}),tt=(r=>(r.Success="success",r.Failure="failure",r.Neutral="neutral",r.Pending="pending",r.Unknown="unknown",r))(tt||{});const Pn=i(({for:r})=>l.createElement(l.Fragment,null,r.avatarUrl?l.createElement("img",{className:"avatar",src:r.avatarUrl,alt:"",role:"presentation","aria-hidden":"true"}):l.createElement(I,{className:"avatar-icon",src:te(8440)})),"InnerAvatar"),yt=i(({for:r,link:a=!0,substituteIcon:u})=>a?l.createElement("a",{className:"avatar-link",href:r.url,title:r.url,"aria-hidden":"true"},u!=null?u:l.createElement(Pn,{for:r})):u!=null?u:l.createElement(Pn,{for:r}),"Avatar"),wt=i(({for:r,text:a=Bt(r)})=>l.createElement("a",{className:"author-link",href:r.url,"aria-label":a,title:r.url},a),"AuthorLink");var We=(r=>(r[r.Committed=0]="Committed",r[r.Mentioned=1]="Mentioned",r[r.Subscribed=2]="Subscribed",r[r.Commented=3]="Commented",r[r.Reviewed=4]="Reviewed",r[r.NewCommitsSinceReview=5]="NewCommitsSinceReview",r[r.Labeled=6]="Labeled",r[r.Milestoned=7]="Milestoned",r[r.Assigned=8]="Assigned",r[r.Unassigned=9]="Unassigned",r[r.HeadRefDeleted=10]="HeadRefDeleted",r[r.Merged=11]="Merged",r[r.CrossReferenced=12]="CrossReferenced",r[r.Closed=13]="Closed",r[r.Reopened=14]="Reopened",r[r.CopilotStarted=15]="CopilotStarted",r[r.CopilotFinished=16]="CopilotFinished",r[r.CopilotFinishedError=17]="CopilotFinishedError",r[r.Other=18]="Other",r))(We||{}),Ue=(r=>(r.Comment="comment",r.Approve="approve",r.RequestChanges="requestChanges",r))(Ue||{}),Ai=(r=>(r[r.None=0]="None",r[r.Available=1]="Available",r[r.ReviewedWithComments=2]="ReviewedWithComments",r[r.ReviewedWithoutComments=3]="ReviewedWithoutComments",r))(Ai||{});function On(r){var a,u;const c=(a=r.submittedAt)!=null?a:r.createdAt,d=c&&Date.now()-new Date(c).getTime()<1e3*60,p=(u=r.state)!=null?u:r.event===We.Commented?"COMMENTED":void 0;let C="";if(d)switch(p){case"APPROVED":C="Pull request approved";break;case"CHANGES_REQUESTED":C="Changes requested on pull request";break;case"COMMENTED":C="Commented on pull request";break}return C}i(On,"ariaAnnouncementForReview");var Xl=Object.defineProperty,Jl=i((r,a,u)=>a in r?Xl(r,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[a]=u,"message_defNormalProp"),Dn=i((r,a,u)=>Jl(r,typeof a!="symbol"?a+"":a,u),"message_publicField");const An=acquireVsCodeApi(),lo=class lo{constructor(a){Dn(this,"_commandHandler"),Dn(this,"lastSentReq"),Dn(this,"pendingReplies"),this._commandHandler=a,this.lastSentReq=0,this.pendingReplies=Object.create(null),window.addEventListener("message",this.handleMessage.bind(this))}registerCommandHandler(a){this._commandHandler=a}async postMessage(a){const u=String(++this.lastSentReq);return new Promise((c,d)=>{this.pendingReplies[u]={resolve:c,reject:d},a=Object.assign(a,{req:u}),An.postMessage(a)})}handleMessage(a){const u=a.data;if(u.seq){const c=this.pendingReplies[u.seq];if(c){u.err?c.reject(u.err):c.resolve(u.res);return}}this._commandHandler&&this._commandHandler(u.res)}};i(lo,"MessageHandler");let No=lo;function lr(r){return new No(r)}i(lr,"getMessageHandler");function zr(){return An.getState()}i(zr,"getState");function Ii(r){const a=zr();a&&a.number&&a.number===(r==null?void 0:r.number)&&(r.pendingCommentText=a.pendingCommentText),r&&An.setState(r)}i(Ii,"setState");function Hi(r){const a=An.getState();An.setState(Object.assign(a,r))}i(Hi,"updateState");var Ro=Object.defineProperty,es=i((r,a,u)=>a in r?Ro(r,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[a]=u,"context_defNormalProp"),ge=i((r,a,u)=>es(r,typeof a!="symbol"?a+"":a,u),"context_publicField");const jr=(an=class{constructor(a=zr(),u=null,c=null){this.pr=a,this.onchange=u,this._handler=c,ge(this,"setTitle",async d=>{const p=await this.postMessage({command:"pr.edit-title",args:{text:d}});this.updatePR({titleHTML:p.titleHTML})}),ge(this,"setDescription",d=>this.postMessage({command:"pr.edit-description",args:{text:d}})),ge(this,"checkout",()=>this.postMessage({command:"pr.checkout"})),ge(this,"openChanges",d=>this.postMessage({command:"pr.open-changes",args:{openToTheSide:d}})),ge(this,"copyPrLink",()=>this.postMessage({command:"pr.copy-prlink"})),ge(this,"copyVscodeDevLink",()=>this.postMessage({command:"pr.copy-vscodedevlink"})),ge(this,"cancelCodingAgent",d=>this.postMessage({command:"pr.cancel-coding-agent",args:d})),ge(this,"exitReviewMode",async()=>{if(this.pr)return this.postMessage({command:"pr.checkout-default-branch",args:this.pr.repositoryDefaultBranch})}),ge(this,"gotoChangesSinceReview",()=>this.postMessage({command:"pr.gotoChangesSinceReview"})),ge(this,"refresh",async()=>{this.pr&&(this.pr.busy=!0),this.updatePR(this.pr),await this.postMessage({command:"pr.refresh"}),this.pr&&(this.pr.busy=!1),this.updatePR(this.pr)}),ge(this,"checkMergeability",()=>this.postMessage({command:"pr.checkMergeability"})),ge(this,"changeEmail",async d=>{const p=await this.postMessage({command:"pr.change-email",args:d});this.updatePR({emailForCommit:p})}),ge(this,"merge",async d=>await this.postMessage({command:"pr.merge",args:d})),ge(this,"openOnGitHub",()=>this.postMessage({command:"pr.openOnGitHub"})),ge(this,"deleteBranch",()=>this.postMessage({command:"pr.deleteBranch"})),ge(this,"revert",async()=>{this.updatePR({busy:!0});const d=await this.postMessage({command:"pr.revert"});this.updatePR({busy:!1,...d})}),ge(this,"readyForReview",()=>this.postMessage({command:"pr.readyForReview"})),ge(this,"addReviewers",()=>this.postMessage({command:"pr.change-reviewers"})),ge(this,"changeProjects",()=>this.postMessage({command:"pr.change-projects"})),ge(this,"removeProject",d=>this.postMessage({command:"pr.remove-project",args:d})),ge(this,"addMilestone",()=>this.postMessage({command:"pr.add-milestone"})),ge(this,"removeMilestone",()=>this.postMessage({command:"pr.remove-milestone"})),ge(this,"addAssignees",()=>this.postMessage({command:"pr.change-assignees"})),ge(this,"addAssigneeYourself",()=>this.postMessage({command:"pr.add-assignee-yourself"})),ge(this,"addAssigneeCopilot",()=>this.postMessage({command:"pr.add-assignee-copilot"})),ge(this,"addLabels",()=>this.postMessage({command:"pr.add-labels"})),ge(this,"create",()=>this.postMessage({command:"pr.open-create"})),ge(this,"deleteComment",async d=>{await this.postMessage({command:"pr.delete-comment",args:d});const{pr:p}=this;if(!p)throw new Error("Unexpectedly no pull request when trying to delete comment");const{id:C,pullRequestReviewId:y}=d;if(!y){this.updatePR({events:p.events.filter(Q=>Q.id!==C)});return}const E=p.events.findIndex(Q=>Q.id===y);if(E===-1){console.error("Could not find review:",y);return}const L=p.events[E];if(!L.comments){console.error("No comments to delete for review:",y,L);return}p.events.splice(E,1,{...L,comments:L.comments.filter(Q=>Q.id!==C)}),this.updatePR(p)}),ge(this,"editComment",d=>this.postMessage({command:"pr.edit-comment",args:d})),ge(this,"updateDraft",(d,p)=>{const y=zr().pendingCommentDrafts||Object.create(null);p!==y[d]&&(y[d]=p,this.updatePR({pendingCommentDrafts:y}))}),ge(this,"requestChanges",d=>this.submitReviewCommand("pr.request-changes",d)),ge(this,"approve",d=>this.submitReviewCommand("pr.approve",d)),ge(this,"submit",d=>this.submitReviewCommand("pr.submit",d)),ge(this,"deleteReview",async()=>{var d;try{const p=await this.postMessage({command:"pr.delete-review"}),C=this.pr,y=(d=C==null?void 0:C.events.filter(E=>!(E.event===We.Reviewed&&E.id===p.deletedReviewId)))!=null?d:[];return C&&y.length<C.events.length&&(C.busy=!1,C.pendingCommentText="",C.pendingCommentDrafts={},C.events=y,this.updatePR(C)),p}catch{return this.updatePR({busy:!1})}}),ge(this,"close",async d=>{const{pr:p}=this;if(!p)throw new Error("Unexpectedly no pull request when trying to close");try{const C=await this.postMessage({command:"pr.close",args:d});let y=[...p.events];C.commentEvent&&y.push(C.commentEvent),C.closeEvent&&y.push(C.closeEvent),this.updatePR({events:y,pendingCommentText:"",state:C.state})}catch{}}),ge(this,"removeLabel",async d=>{const{pr:p}=this;if(!p)throw new Error("Unexpectedly no pull request when trying to remove label");await this.postMessage({command:"pr.remove-label",args:d});const C=p.labels.filter(y=>y.name!==d);this.updatePR({labels:C})}),ge(this,"applyPatch",async d=>{this.postMessage({command:"pr.apply-patch",args:{comment:d}})}),ge(this,"reRequestReview",async d=>{const{pr:p}=this;if(!p)throw new Error("Unexpectedly no pull request when trying to re-request review");const{reviewers:C}=await this.postMessage({command:"pr.re-request-review",args:d});p.reviewers=C,this.updatePR(p)}),ge(this,"updateBranch",async()=>{var d,p;const{pr:C}=this;if(!C)throw new Error("Unexpectedly no pull request when trying to update branch");const y=await this.postMessage({command:"pr.update-branch"});C.events=(d=y.events)!=null?d:C.events,C.mergeable=(p=y.mergeable)!=null?p:C.mergeable,this.updatePR(C)}),ge(this,"dequeue",async()=>{const{pr:d}=this;if(!d)throw new Error("Unexpectedly no pull request when trying to dequeue");await this.postMessage({command:"pr.dequeue"})&&(d.mergeQueueEntry=void 0),this.updatePR(d)}),ge(this,"enqueue",async()=>{const{pr:d}=this;if(!d)throw new Error("Unexpectedly no pull request when trying to enqueue");const p=await this.postMessage({command:"pr.enqueue"});p.mergeQueueEntry&&(d.mergeQueueEntry=p.mergeQueueEntry),this.updatePR(d)}),ge(this,"openDiff",d=>this.postMessage({command:"pr.open-diff",args:{comment:d}})),ge(this,"toggleResolveComment",(d,p,C)=>{this.postMessage({command:"pr.resolve-comment-thread",args:{threadId:d,toResolve:C,thread:p}}).then(y=>{y?this.updatePR({events:y}):this.refresh()})}),ge(this,"openSessionLog",d=>this.postMessage({command:"pr.open-session-log",args:{link:d}})),ge(this,"openCommitChanges",async d=>{this.updatePR({loadingCommit:d});try{const p={commitSha:d};await this.postMessage({command:"pr.openCommitChanges",args:p})}finally{this.updatePR({loadingCommit:void 0})}}),ge(this,"setPR",d=>(this.pr=d,Ii(this.pr),this.onchange&&this.onchange(this.pr),this)),ge(this,"updatePR",d=>(Hi(d),this.pr=this.pr?{...this.pr,...d}:d,this.onchange&&this.onchange(this.pr),this)),ge(this,"handleMessage",d=>{var p;switch(d.command){case"pr.clear":this.setPR(void 0);return;case"pr.initialize":return this.setPR(d.pullrequest);case"update-state":return this.updatePR({state:d.state});case"pr.update-checkout-status":return this.updatePR({isCurrentlyCheckedOut:d.isCurrentlyCheckedOut});case"pr.deleteBranch":const C={};return d.branchTypes&&d.branchTypes.map(E=>{E==="local"?C.isLocalHeadDeleted=!0:(E==="remote"||E==="upstream")&&(C.isRemoteHeadDeleted=!0)}),this.updatePR(C);case"pr.enable-exit":return this.updatePR({isCurrentlyCheckedOut:!0});case"set-scroll":window.scrollTo(d.scrollPosition.x,d.scrollPosition.y);return;case"pr.scrollToPendingReview":const y=(p=document.getElementById("pending-review"))!=null?p:document.getElementById("comment-textarea");y&&(y.scrollIntoView(),y.focus());return;case"pr.submitting-review":return this.updatePR({busy:!0,lastReviewType:d.lastReviewType});case"pr.append-review":return this.appendReview(d)}}),c||(this._handler=lr(this.handleMessage))}async submitReviewCommand(a,u){try{const c=await this.postMessage({command:a,args:u});return this.appendReview(c)}catch{return this.updatePR({busy:!1})}}appendReview(a){const{pr:u}=this;if(!u)throw new Error("Unexpectedly no pull request when trying to append review");const{events:c,reviewers:d,reviewedEvent:p}=a;if(u.busy=!1,!c){this.updatePR(u);return}d&&(u.reviewers=d),u.events=c.length===0?[...u.events,p]:c,p.event===We.Reviewed&&(u.currentUserReviewState=p.state),u.pendingCommentText="",u.pendingReviewType=void 0,this.updatePR(u)}async updateAutoMerge({autoMerge:a,autoMergeMethod:u}){const{pr:c}=this;if(!c)throw new Error("Unexpectedly no pull request when trying to update auto merge");const d=await this.postMessage({command:"pr.update-automerge",args:{autoMerge:a,autoMergeMethod:u}});c.autoMerge=d.autoMerge,c.autoMergeMethod=d.autoMergeMethod,this.updatePR(c)}postMessage(a){var u,c;return(c=(u=this._handler)==null?void 0:u.postMessage(a))!=null?c:Promise.resolve(void 0)}},i(an,"_PRContext"),an);ge(jr,"instance",new jr);let Po=jr;const Ve=(0,l.createContext)(Po.instance);var Ur=te(7007);const Ke=new Ur.EventEmitter;function yn(r){const[a,u]=(0,l.useState)(r);return(0,l.useEffect)(()=>{a!==r&&u(r)},[r]),[a,u]}i(yn,"useStateProp");const ts=i(({authorAssociation:r},a=u=>`(${u.toLowerCase()})`)=>r.toLowerCase()==="user"?a("you"):r&&r!=="NONE"?a(r):null,"association");function Wr(r){var a;const{isPRDescription:u,children:c,comment:d,headerInEditMode:p}=r,{bodyHTML:C,body:y}=d,E=(a=d.id)!=null?a:-1,L=!!d.canEdit,Q=!!d.canDelete,$=d.pullRequestReviewId,[ee,me]=yn(y),[z,we]=yn(C),{deleteComment:ue,editComment:Se,setDescription:Ee,pr:Ne}=(0,l.useContext)(Ve),_e=(Ne==null?void 0:Ne.pendingCommentDrafts)&&Ne.pendingCommentDrafts[E],[qe,Ce]=(0,l.useState)(!!_e),[Ze,mt]=(0,l.useState)(!1);if(qe)return l.cloneElement(p?l.createElement(Do,{for:d}):l.createElement(l.Fragment,null),{},[l.createElement(Fi,{id:E,key:`editComment${E}`,body:_e||ee,onCancel:i(()=>{Ne!=null&&Ne.pendingCommentDrafts&&delete Ne.pendingCommentDrafts[E],Ce(!1)},"onCancel"),onSave:i(async ot=>{try{const Ge=u?await Ee(ot):await Se({comment:d,text:ot});we(Ge.bodyHTML),me(ot)}finally{Ce(!1)}},"onSave")})]);const bn=d.event===We.Commented||d.event===We.Reviewed?On(d):void 0;return l.createElement(Do,{for:d,onMouseEnter:i(()=>mt(!0),"onMouseEnter"),onMouseLeave:i(()=>mt(!1),"onMouseLeave"),onFocus:i(()=>mt(!0),"onFocus")},bn?l.createElement("div",{role:"alert","aria-label":bn}):null,l.createElement("div",{className:"action-bar comment-actions",style:{display:Ze?"flex":"none"}},l.createElement("button",{title:"Quote reply",className:"icon-button",onClick:i(()=>Ke.emit("quoteReply",ee),"onClick")},ke),L?l.createElement("button",{title:"Edit comment",className:"icon-button",onClick:i(()=>Ce(!0),"onClick")},He):null,Q?l.createElement("button",{title:"Delete comment",className:"icon-button",onClick:i(()=>ue({id:E,pullRequestReviewId:$}),"onClick")},jl):null),l.createElement(rs,{comment:d,bodyHTML:z,body:ee,canApplyPatch:!!(Ne!=null&&Ne.isCurrentlyCheckedOut),allowEmpty:!!r.allowEmpty,specialDisplayBodyPostfix:d.specialDisplayBodyPostfix}),c)}i(Wr,"CommentView");function wn(r){return r.authorAssociation!==void 0}i(wn,"isReviewEvent");function Oo(r){return r&&typeof r=="object"&&typeof r.body=="string"&&typeof r.diffHunk=="string"}i(Oo,"isIComment");const sr={REQUESTED:"will review",PENDING:"will review",COMMENTED:"reviewed",CHANGES_REQUESTED:"requested changes",APPROVED:"approved"},ns=i(r=>sr[r],"reviewDescriptor");function Do({for:r,onFocus:a,onMouseEnter:u,onMouseLeave:c,children:d}){var p,C,y,E,L;const Q=r,$=(p=Q.htmlUrl)!=null?p:r.url,ee=(y=Oo(r)&&r.isDraft)!=null?y:wn(r)&&((C=r.state)==null?void 0:C.toLocaleUpperCase())==="PENDING",me=(E=Q.user)!=null?E:r.author,z=(L=r.createdAt)!=null?L:r.submittedAt;return l.createElement("div",{className:"comment-container comment review-comment",onFocus:a,onMouseEnter:u,onMouseLeave:c},l.createElement("div",{className:"review-comment-container"},l.createElement("h3",{className:`review-comment-header${wn(r)&&r.comments.length>0?"":" no-details"}`},l.createElement(vo,null,l.createElement(yt,{for:me}),l.createElement(wt,{for:me}),wn(r)?ts(r):null,z?l.createElement(l.Fragment,null,wn(r)&&r.state?ns(r.state):"commented",at,l.createElement(bt,{href:$,date:z})):l.createElement("em",null,"pending"),ee?l.createElement(l.Fragment,null,l.createElement("span",{className:"pending-label"},"Pending")):null)),d))}i(Do,"CommentBox");function Fi({id:r,body:a,onCancel:u,onSave:c}){const{updateDraft:d}=(0,l.useContext)(Ve),p=(0,l.useRef)({body:a,dirty:!1}),C=(0,l.useRef)();(0,l.useEffect)(()=>{const $=setInterval(()=>{p.current.dirty&&(d(r,p.current.body),p.current.dirty=!1)},500);return()=>clearInterval($)},[p]);const y=(0,l.useCallback)(async()=>{const{markdown:$,submitButton:ee}=C.current;ee.disabled=!0;try{await c($.value)}finally{ee.disabled=!1}},[C,c]),E=(0,l.useCallback)($=>{$.preventDefault(),y()},[y]),L=(0,l.useCallback)($=>{($.metaKey||$.ctrlKey)&&$.key==="Enter"&&($.preventDefault(),y())},[y]),Q=(0,l.useCallback)($=>{p.current.body=$.target.value,p.current.dirty=!0},[p]);return l.createElement("form",{ref:C,onSubmit:E},l.createElement("textarea",{name:"markdown",defaultValue:a,onKeyDown:L,onInput:Q}),l.createElement("div",{className:"form-actions"},l.createElement("button",{className:"secondary",onClick:u},"Cancel"),l.createElement("button",{type:"submit",name:"submitButton"},"Save")))}i(Fi,"EditComment");const rs=i(({comment:r,bodyHTML:a,body:u,canApplyPatch:c,allowEmpty:d,specialDisplayBodyPostfix:p})=>{var C,y;if(!u&&!a)return d?null:l.createElement("div",{className:"comment-body"},l.createElement("em",null,"No description provided."));const{applyPatch:E}=(0,l.useContext)(Ve),L=l.createElement("div",{dangerouslySetInnerHTML:{__html:a!=null?a:""}}),$=((y=(C=u||a)==null?void 0:C.indexOf("```diff"))!=null?y:-1)>-1&&c&&r?l.createElement("button",{onClick:i(()=>E(r),"onClick")},"Apply Patch"):l.createElement(l.Fragment,null);return l.createElement("div",{className:"comment-body"},L,$,p?l.createElement("br",null):null,p?l.createElement("em",null,p):null,l.createElement(Ao,{reactions:r==null?void 0:r.reactions}))},"CommentBody"),Ao=i(({reactions:r})=>{if(!Array.isArray(r)||r.length===0)return null;const a=r.filter(u=>u.count>0);return a.length===0?null:l.createElement("div",{className:"comment-reactions",style:{marginTop:6}},a.map((u,c)=>{const p=u.reactors||[],C=p.slice(0,10),y=p.length>10?p.length-10:0;let E="";return C.length>0&&(y>0?E=`${Fo(C)} and ${y} more reacted with ${u.label}`:E=`${Fo(C)} reacted with ${u.label}`),l.createElement("div",{key:u.label+c,title:E},l.createElement("span",{className:"reaction-label"},u.label),at,u.count>1?l.createElement("span",{className:"reaction-count"},u.count):null)}))},"CommentReactions");function Io({pendingCommentText:r,isCopilotOnMyBehalf:a,state:u,hasWritePermission:c,isIssue:d,isAuthor:p,continueOnGitHub:C,currentUserReviewState:y,lastReviewType:E,busy:L,hasReviewDraft:Q}){const{updatePR:$,requestChanges:ee,approve:me,close:z,openOnGitHub:we,submit:ue}=(0,l.useContext)(Ve),[Se,Ee]=(0,l.useState)(!1),Ne=(0,l.useRef)(),_e=(0,l.useRef)();Ke.addListener("quoteReply",Qe=>{var Rt,Kt;const un=Qe.replace(/\n/g,`
> `);$({pendingCommentText:`> ${un} 

`}),(Rt=_e.current)==null||Rt.scrollIntoView(),(Kt=_e.current)==null||Kt.focus()});const qe=i(Qe=>{Qe.preventDefault();const{value:Rt}=_e.current;z(Rt)},"closeButton");let Ce=E!=null?E:y==="APPROVED"?Ue.Approve:y==="CHANGES_REQUESTED"?Ue.RequestChanges:Ue.Comment;async function Ze(Qe){const{value:Rt}=_e.current;if(C&&Qe!==Ue.Comment){await we();return}switch(Ee(!0),Qe){case Ue.RequestChanges:await ee(Rt);break;case Ue.Approve:await me(Rt);break;default:await ue(Rt)}Ee(!1)}i(Ze,"submitAction");const mt=(0,l.useCallback)(Qe=>{(Qe.metaKey||Qe.ctrlKey)&&Qe.key==="Enter"&&Ze(Ce)},[ue]);async function bn(){await Ze(Ce)}i(bn,"defaultSubmitAction");const ot=p?{[Ue.Comment]:"Comment"}:C?{[Ue.Comment]:"Comment",[Ue.Approve]:"Approve on github.com",[Ue.RequestChanges]:"Request changes on github.com"}:Ho(d),Ge=!(r!=null&&r.trim())&&!Q,It=!1;return l.createElement("form",{id:"comment-form",ref:Ne,className:"comment-form main-comment-form"},l.createElement("textarea",{id:"comment-textarea",name:"body",ref:_e,onInput:i(({target:Qe})=>$({pendingCommentText:Qe.value}),"onInput"),onKeyDown:mt,value:r,placeholder:"Leave a comment",onClick:i(()=>{var Qe;!r&&a&&!((Qe=_e.current)!=null&&Qe.textContent)&&(_e.current.textContent="@copilot ",_e.current.setSelectionRange(9,9))},"onClick")}),l.createElement("div",{className:"form-actions"},c||p?l.createElement("button",{id:"close",className:"secondary",disabled:Se||u!==Ct.Open,onClick:qe,"data-command":"close"},d?"Close Issue":"Close Pull Request"):null,l.createElement(Pr,{optionsContext:i(()=>Zr(ot,r,Ge),"optionsContext"),defaultAction:bn,defaultOptionLabel:i(()=>ot[Ce],"defaultOptionLabel"),defaultOptionValue:i(()=>Ce,"defaultOptionValue"),allOptions:i(()=>{const Qe=[];return ot.approve&&Qe.push({label:ot[Ue.Approve],value:Ue.Approve,action:i(()=>Ze(Ue.Approve),"action"),optionDisabled:It}),ot.comment&&Qe.push({label:ot[Ue.Comment],value:Ue.Comment,action:i(()=>Ze(Ue.Comment),"action"),optionDisabled:Ge}),ot.requestChanges&&Qe.push({label:ot[Ue.RequestChanges],value:Ue.RequestChanges,action:i(()=>Ze(Ue.RequestChanges),"action"),optionDisabled:Ge}),Qe},"allOptions"),optionsTitle:"Submit pull request review",disabled:Se||L,hasSingleAction:Object.keys(ot).length===1,spreadable:!0})))}i(Io,"AddComment");function Ho(r){return r?jt:In}i(Ho,"commentMethods");const jt={comment:"Comment"},In={...jt,approve:"Approve",requestChanges:"Request Changes"},Zr=i((r,a,u)=>{const c={preventDefaultContextMenuItems:!0,"github:reviewCommentMenu":!0};return r.approve&&(r.approve===In.approve?c["github:reviewCommentApprove"]=!0:c["github:reviewCommentApproveOnDotCom"]=!0),r.comment&&(c["github:reviewCommentComment"]=!0,u||(c["github:reviewCommentCommentEnabled"]=!0)),r.requestChanges&&(r.requestChanges===In.requestChanges?(c["github:reviewCommentRequestChanges"]=!0,u||(c["github:reviewRequestChangesEnabled"]=!0)):c["github:reviewCommentRequestChangesOnDotCom"]=!0),c.body=a!=null?a:"",JSON.stringify(c)},"makeCommentMenuContext"),os=i(r=>{var a,u,c;const{updatePR:d,requestChanges:p,approve:C,submit:y,openOnGitHub:E}=useContext(PullRequestContext),[L,Q]=useState(!1),$=useRef();let ee=(a=r.lastReviewType)!=null?a:r.currentUserReviewState==="APPROVED"?ReviewType.Approve:r.currentUserReviewState==="CHANGES_REQUESTED"?ReviewType.RequestChanges:ReviewType.Comment;async function me(_e){const{value:qe}=$.current;if(r.continueOnGitHub&&_e!==ReviewType.Comment){await E();return}switch(Q(!0),_e){case ReviewType.RequestChanges:await p(qe);break;case ReviewType.Approve:await C(qe);break;default:await y(qe)}Q(!1)}i(me,"submitAction");async function z(){await me(ee)}i(z,"defaultSubmitAction");const we=i(_e=>{d({pendingCommentText:_e.target.value})},"onChangeTextarea"),ue=useCallback(_e=>{(_e.metaKey||_e.ctrlKey)&&_e.key==="Enter"&&(_e.preventDefault(),z())},[me]),Se=r.isAuthor?{comment:"Comment"}:r.continueOnGitHub?{comment:"Comment",approve:"Approve on github.com",requestChanges:"Request changes on github.com"}:Ho(r.isIssue),Ee=!((u=r.pendingCommentText)!=null&&u.trim())&&!r.hasReviewDraft,Ne=!1;return React.createElement("span",{className:"comment-form"},React.createElement("textarea",{id:"comment-textarea",name:"body",placeholder:"Leave a comment",ref:$,value:(c=r.pendingCommentText)!=null?c:"",onChange:we,onKeyDown:ue,disabled:L||r.busy}),React.createElement("div",{className:"comment-button"},React.createElement(ContextDropdown,{optionsContext:i(()=>Zr(Se,r.pendingCommentText,Ee),"optionsContext"),defaultAction:z,defaultOptionLabel:i(()=>Se[ee],"defaultOptionLabel"),defaultOptionValue:i(()=>ee,"defaultOptionValue"),allOptions:i(()=>{const _e=[];return Se.approve&&_e.push({label:Se[ReviewType.Approve],value:ReviewType.Approve,action:i(()=>me(ReviewType.Approve),"action"),optionDisabled:Ne}),Se.comment&&_e.push({label:Se[ReviewType.Comment],value:ReviewType.Comment,action:i(()=>me(ReviewType.Comment),"action"),optionDisabled:Ee}),Se.requestChanges&&_e.push({label:Se[ReviewType.RequestChanges],value:ReviewType.RequestChanges,action:i(()=>me(ReviewType.RequestChanges),"action"),optionDisabled:Ee}),_e},"allOptions"),optionsTitle:"Submit pull request review",disabled:L||r.busy,hasSingleAction:Object.keys(Se).length===1,spreadable:!0})))},"AddCommentSimple");function Fo(r){return r.length===0?"":r.length===1?r[0]:r.length===2?`${r[0]} and ${r[1]}`:`${r.slice(0,-1).join(", ")} and ${r[r.length-1]}`}i(Fo,"joinWithAnd");const $i="copilot-swe-agent",Vi="copilot-pull-request-reviewer",Bi="BOT_kgDOCnlnWA",zi=[Vi,$i,"Copilot"];var Hn=(r=>(r[r.None=0]="None",r[r.Started=1]="Started",r[r.Completed=2]="Completed",r[r.Failed=3]="Failed",r))(Hn||{});function ar(r){if(!r)return 0;switch(r.event){case We.CopilotStarted:return 1;case We.CopilotFinished:return 2;case We.CopilotFinishedError:return 3;default:return 0}}i(ar,"copilotEventToStatus");function $o(r){for(let a=r.length-1;a>=0;a--)if(ar(r[a])!==0)return r[a]}i($o,"mostRecentCopilotEvent");function Vo({canEdit:r,state:a,head:u,base:c,title:d,titleHTML:p,number:C,url:y,author:E,isCurrentlyCheckedOut:L,isDraft:Q,isIssue:$,repositoryDefaultBranch:ee,events:me,owner:z,repo:we,busy:ue,stateReason:Se}){const[Ee,Ne]=yn(d),[_e,qe]=(0,l.useState)(!1),Ce=$o(me);return l.createElement(l.Fragment,null,l.createElement(Bo,{title:Ee,titleHTML:p,number:C,url:y,inEditMode:_e,setEditMode:qe,setCurrentTitle:Ne,canEdit:r,owner:z,repo:we}),l.createElement(jo,{state:a,stateReason:Se,head:u,base:c,author:E,isIssue:$,isDraft:Q,codingAgentEvent:Ce}),l.createElement("div",{className:"header-actions"},l.createElement(ji,{isCurrentlyCheckedOut:L,isIssue:$,repositoryDefaultBranch:ee,owner:z,repo:we,number:C,busy:ue}),l.createElement(zo,{canEdit:r,codingAgentEvent:Ce})))}i(Vo,"Header");function Bo({title:r,titleHTML:a,number:u,url:c,inEditMode:d,setEditMode:p,setCurrentTitle:C,canEdit:y,owner:E,repo:L}){const{setTitle:Q,copyPrLink:$}=(0,l.useContext)(Ve),ee=l.createElement("form",{className:"editing-form title-editing-form",onSubmit:i(async ue=>{ue.preventDefault();try{const Ee=ue.currentTarget.elements[0],Ne=Ee?Ee.value:"";await Q(Ne),C(Ne)}finally{p(!1)}},"onSubmit")},l.createElement("input",{type:"text",style:{width:"100%"},defaultValue:r}),l.createElement("div",{className:"form-actions"},l.createElement("button",{type:"button",className:"secondary",onClick:i(()=>p(!1),"onClick")},"Cancel"),l.createElement("button",{type:"submit"},"Update"))),me={preventDefaultContextMenuItems:!0,owner:E,repo:L,number:u};me["github:copyMenu"]=!0;const z=l.createElement("div",{className:"overview-title"},l.createElement("h2",null,l.createElement("span",{dangerouslySetInnerHTML:{__html:a}})," ",l.createElement("a",{href:c,title:c,"data-vscode-context":JSON.stringify(me)},"#",u)),y?l.createElement("button",{title:"Rename",onClick:i(()=>p(!0),"onClick"),className:"icon-button"},He):null,l.createElement("button",{title:"Copy Link",onClick:$,className:"icon-button","aria-label":"Copy Pull Request Link"},De));return d?ee:z}i(Bo,"Title");function ji({isCurrentlyCheckedOut:r,isIssue:a,repositoryDefaultBranch:u,owner:c,repo:d,number:p,busy:C}){const{refresh:y}=(0,l.useContext)(Ve);return l.createElement("div",{className:"button-group"},l.createElement(is,{isCurrentlyCheckedOut:r,isIssue:a,repositoryDefaultBranch:u,owner:c,repo:d,number:p}),l.createElement("button",{title:"Refresh with the latest data from GitHub",onClick:y,className:"secondary"},"Refresh"),C?l.createElement("div",{className:"spinner"},w):null)}i(ji,"ButtonGroup");function zo({canEdit:r,codingAgentEvent:a}){const{cancelCodingAgent:u,updatePR:c,openSessionLog:d}=(0,l.useContext)(Ve),[p,C]=(0,l.useState)(!1),y=i(async()=>{if(!a)return;C(!0);const $=await u(a);$.events.length>0&&c($),C(!1)},"cancel"),E=a==null?void 0:a.sessionLink;if(!a||ar(a)!==Hn.Started)return null;const L={preventDefaultContextMenuItems:!0,...E};L["github:codingAgentMenu"]=!0;const Q=[];return E&&Q.push({label:"View Session",value:"",action:i(()=>d(E),"action")}),r&&Q.unshift({label:"Cancel Coding Agent",value:"",action:y}),l.createElement(Pr,{optionsContext:i(()=>JSON.stringify(L),"optionsContext"),defaultAction:Q[0].action,defaultOptionLabel:i(()=>p?l.createElement(l.Fragment,null,l.createElement("span",{className:"loading-button"},w),Q[0].label):Q[0].label,"defaultOptionLabel"),defaultOptionValue:i(()=>Q[0].value,"defaultOptionValue"),allOptions:i(()=>Q,"allOptions"),optionsTitle:Q[0].label,disabled:p,hasSingleAction:!1,spreadable:!1,isSecondary:!0})}i(zo,"CancelCodingAgentButton");function jo({state:r,stateReason:a,isDraft:u,isIssue:c,author:d,base:p,head:C,codingAgentEvent:y}){const{text:E,color:L,icon:Q}=Fn(r,!!u,c,a),$=ar(y);let ee;return $===Hn.Started?ee=vi:$===Hn.Completed?ee=Rr:$===Hn.Failed&&(ee=hn),l.createElement("div",{className:"subtitle"},l.createElement("div",{id:"status",className:`status-badge-${L}`},l.createElement("span",{className:"icon"},Q),l.createElement("span",null,E)),l.createElement("div",{className:"author"},l.createElement(yt,{for:d,substituteIcon:ee}),l.createElement("div",{className:"merge-branches"},l.createElement(wt,{for:d})," ",c?null:l.createElement(l.Fragment,null,Ui(r)," into"," ",l.createElement("code",{className:"branch-tag"},p)," from ",l.createElement("code",{className:"branch-tag"},C)))))}i(jo,"Subtitle");const is=i(({isCurrentlyCheckedOut:r,isIssue:a,repositoryDefaultBranch:u,owner:c,repo:d,number:p})=>{const{exitReviewMode:C,checkout:y,openChanges:E}=(0,l.useContext)(Ve),[L,Q]=(0,l.useState)(!1),$=i(async z=>{try{switch(Q(!0),z){case"checkout":await y();break;case"exitReviewMode":await C();break;case"openChanges":await E();break;default:throw new Error(`Can't find action ${z}`)}}finally{Q(!1)}},"onClick");if(a)return null;const ee={preventDefaultContextMenuItems:!0,owner:c,repo:d,number:p};ee["github:checkoutMenu"]=!0;const me=[];return r?me.push({label:`Checkout '${u}'`,value:"",action:i(()=>$("exitReviewMode"),"action")}):me.push({label:"Checkout",value:"",action:i(()=>$("checkout"),"action")}),me.push({label:"Open Changes",value:"",action:i(()=>$("openChanges"),"action")}),l.createElement(Pr,{optionsContext:i(()=>JSON.stringify(ee),"optionsContext"),defaultAction:me[0].action,defaultOptionLabel:i(()=>me[0].label,"defaultOptionLabel"),defaultOptionValue:i(()=>me[0].value,"defaultOptionValue"),allOptions:i(()=>me,"allOptions"),optionsTitle:me[0].label,disabled:L,hasSingleAction:!1,spreadable:!1})},"CheckoutButton");function Fn(r,a,u,c){const d=u?pe:je,p=u?xe:ne;if(r===Ct.Merged)return{text:"Merged",color:"merged",icon:dt};if(r===Ct.Open)return a?{text:"Draft",color:"draft",icon:j}:{text:"Open",color:"open",icon:p};{let C="closed";return u&&(C=c!=="COMPLETED"?"draft":"merged"),{text:"Closed",color:C,icon:d}}}i(Fn,"getStatus");function Ui(r){return r===Ct.Merged?"merged changes":"wants to merge changes"}i(Ui,"getActionText");const Uo=i(({busy:r,baseHasMergeQueue:a})=>r?l.createElement("label",{htmlFor:"automerge-checkbox",className:"automerge-checkbox-label"},"Setting..."):l.createElement("label",{htmlFor:"automerge-checkbox",className:"automerge-checkbox-label"},a?"Merge when ready":"Auto-merge"),"AutoMergeLabel"),Jt=i(({updateState:r,baseHasMergeQueue:a,allowAutoMerge:u,defaultMergeMethod:c,mergeMethodsAvailability:d,autoMerge:p,isDraft:C})=>{if(!u&&!p||!d||!c)return null;const y=l.useRef(),[E,L]=l.useState(!1),Q=i(()=>{var $,ee;return(ee=($=y.current)==null?void 0:$.value)!=null?ee:"merge"},"selectedMethod");return l.createElement("div",{className:"automerge-section"},l.createElement("div",{className:"automerge-checkbox-wrapper"},l.createElement("input",{id:"automerge-checkbox",type:"checkbox",name:"automerge",checked:p,disabled:!u||C||E,onChange:i(async()=>{L(!0),await r({autoMerge:!p,autoMergeMethod:Q()}),L(!1)},"onChange")})),l.createElement(Uo,{busy:E,baseHasMergeQueue:a}),a?null:l.createElement("div",{className:"merge-select-container"},l.createElement(Gi,{ref:y,defaultMergeMethod:c,mergeMethodsAvailability:d,onChange:i(async()=>{L(!0),await r({autoMergeMethod:Q()}),L(!1)},"onChange"),disabled:E})))},"AutoMerge"),qr=i(({mergeQueueEntry:r})=>{const a=l.useContext(Ve);let u,c;switch(r.state){case Xt.Mergeable:case Xt.AwaitingChecks:case Xt.Queued:{c=l.createElement("span",{className:"merge-queue-pending"},"Queued to merge..."),r.position===1?u=l.createElement("span",null,"This pull request is at the head of the ",l.createElement("a",{href:r.url},"merge queue"),"."):u=l.createElement("span",null,"This pull request is in the ",l.createElement("a",{href:r.url},"merge queue"),".");break}case Xt.Locked:{c=l.createElement("span",{className:"merge-queue-blocked"},"Merging is blocked"),u=l.createElement("span",null,"The base branch does not allow updates");break}case Xt.Unmergeable:{c=l.createElement("span",{className:"merge-queue-blocked"},"Merging is blocked"),u=l.createElement("span",null,"There are conflicts with the base branch.");break}}return l.createElement("div",{className:"merge-queue-container"},l.createElement("div",{className:"merge-queue"},l.createElement("div",{className:"merge-queue-icon"}),l.createElement("div",{className:"merge-queue-title"},c),u),l.createElement("div",{className:"button-container"},l.createElement("button",{onClick:a.dequeue},"Remove from Queue")))},"QueuedToMerge");var en,ur=new Uint8Array(16);function cr(){if(!en&&(en=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!en))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return en(ur)}i(cr,"rng");const xn=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Wo(r){return typeof r=="string"&&xn.test(r)}i(Wo,"validate");const Qt=Wo;for(var st=[],Qr=0;Qr<256;++Qr)st.push((Qr+256).toString(16).substr(1));function ls(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,u=(st[r[a+0]]+st[r[a+1]]+st[r[a+2]]+st[r[a+3]]+"-"+st[r[a+4]]+st[r[a+5]]+"-"+st[r[a+6]]+st[r[a+7]]+"-"+st[r[a+8]]+st[r[a+9]]+"-"+st[r[a+10]]+st[r[a+11]]+st[r[a+12]]+st[r[a+13]]+st[r[a+14]]+st[r[a+15]]).toLowerCase();if(!Qt(u))throw TypeError("Stringified UUID is invalid");return u}i(ls,"stringify");const Zo=ls;function ss(r,a,u){r=r||{};var c=r.random||(r.rng||cr)();if(c[6]=c[6]&15|64,c[8]=c[8]&63|128,a){u=u||0;for(var d=0;d<16;++d)a[u+d]=c[d];return a}return Zo(c)}i(ss,"v4");const $n=ss;var tn=(r=>(r[r.esc=27]="esc",r[r.down=40]="down",r[r.up=38]="up",r))(tn||{});const qo=i(({options:r,defaultOption:a,disabled:u,submitAction:c,changeAction:d})=>{const[p,C]=(0,l.useState)(a),[y,E]=(0,l.useState)(!1),L=$n(),Q=`expandOptions${L}`,$=i(()=>{E(!y)},"onClick"),ee=i(we=>{C(we.target.value),E(!1);const ue=document.getElementById(`confirm-button${L}`);ue==null||ue.focus(),d&&d(we.target.value)},"onMethodChange"),me=i(we=>{if(y){const ue=document.activeElement;switch(we.keyCode){case 27:E(!1);const Se=document.getElementById(Q);Se==null||Se.focus();break;case 40:if(!(ue!=null&&ue.id)||ue.id===Q){const Ee=document.getElementById(`${L}option0`);Ee==null||Ee.focus()}else{const Ee=new RegExp(`${L}option([0-9])`),Ne=ue.id.match(Ee);if(Ne!=null&&Ne.length){const _e=parseInt(Ne[1]);if(_e<Object.entries(r).length-1){const qe=document.getElementById(`${L}option${_e+1}`);qe==null||qe.focus()}}}break;case 38:if(!(ue!=null&&ue.id)||ue.id===Q){const Ee=Object.entries(r).length-1,Ne=document.getElementById(`${L}option${Ee}`);Ne==null||Ne.focus()}else{const Ee=new RegExp(`${L}option([0-9])`),Ne=ue.id.match(Ee);if(Ne!=null&&Ne.length){const _e=parseInt(Ne[1]);if(_e>0){const qe=document.getElementById(`${L}option${_e-1}`);qe==null||qe.focus()}}}break}}},"onKeyDown"),z=Object.entries(r).length===1?"hidden":y?"open":"";return l.createElement("div",{className:"select-container",onKeyDown:me},l.createElement("div",{className:"select-control"},l.createElement(Kr,{dropdownId:L,className:Object.keys(r).length>1?"select-left":"",options:r,selected:p,submitAction:c,disabled:!!u}),l.createElement("div",{className:`split${u?" disabled":""}`},l.createElement("div",{className:`separator${u?" disabled":""}`})),l.createElement("button",{id:Q,className:"select-right "+z,"aria-label":"Expand button options",onClick:$},G)),l.createElement("div",{className:y?"options-select":"hidden"},Object.entries(r).map(([we,ue],Se)=>l.createElement("button",{id:`${L}option${Se}`,key:we,value:we,onClick:ee},ue))))},"Dropdown");function Kr({dropdownId:r,className:a,options:u,selected:c,disabled:d,submitAction:p}){const[C,y]=(0,l.useState)(!1),E=i(async L=>{L.preventDefault();try{y(!0),await p(c)}finally{y(!1)}},"onSubmit");return l.createElement("form",{onSubmit:E},l.createElement("input",{disabled:C||d,type:"submit",className:a,id:`confirm-button${r}`,value:u[c]}))}i(Kr,"Confirm");function Qo(r){const{reviewer:a,state:u}=r.reviewState,{reRequestReview:c}=(0,l.useContext)(Ve),d=r.event?On(r.event):void 0;return l.createElement("div",{className:"section-item reviewer"},l.createElement("div",{className:"avatar-with-author"},l.createElement(yt,{for:a}),l.createElement(wt,{for:a})),l.createElement("div",{className:"reviewer-icons"},u!=="REQUESTED"&&(zt(a)||a.accountType!==Lo.Bot)?l.createElement("button",{className:"icon-button",title:"Re-request review",onClick:i(()=>c(r.reviewState.reviewer.id),"onClick")},Lt,"\uFE0F"):null,Yr[u],d?l.createElement("div",{role:"alert","aria-label":d}):null))}i(Qo,"Reviewer");const Yr={REQUESTED:(0,l.cloneElement)(ae,{className:"section-icon requested",title:"Awaiting requested review"}),COMMENTED:(0,l.cloneElement)(he,{className:"section-icon commented",Root:"div",title:"Left review comments"}),APPROVED:(0,l.cloneElement)(ie,{className:"section-icon approved",title:"Approved these changes"}),CHANGES_REQUESTED:(0,l.cloneElement)(Be,{className:"section-icon changes",title:"Requested changes"})},Gr=i(({pr:r,isSimple:a})=>r.state===Ct.Merged?l.createElement("div",{className:"branch-status-message"},l.createElement("div",{className:"branch-status-icon"},a?dt:null)," ","Pull request successfully merged."):r.state===Ct.Closed?l.createElement("div",{className:"branch-status-message"},"This pull request is closed."):null,"PRStatusMessage"),Nt=i(({pr:r})=>r.state===Ct.Open?null:l.createElement(Ki,{...r}),"DeleteOption"),as=i(({pr:r})=>{var a;const{state:u,status:c}=r,[d,p]=(0,l.useReducer)(C=>!C,(a=c==null?void 0:c.statuses.some(C=>C.state===tt.Failure))!=null?a:!1);return(0,l.useEffect)(()=>{var C;(C=c==null?void 0:c.statuses.some(y=>y.state===tt.Failure))!=null&&C?d||p():d&&p()},c==null?void 0:c.statuses),u===Ct.Open&&(c!=null&&c.statuses.length)?l.createElement(l.Fragment,null,l.createElement("div",{className:"status-section"},l.createElement("div",{className:"status-item"},l.createElement(Yo,{state:c.state}),l.createElement("p",{className:"status-item-detail-text"},Xi(c.statuses)),l.createElement("button",{id:"status-checks-display-button",className:"secondary small-button",onClick:p,"aria-expanded":d},d?"Hide":"Show")),d?l.createElement(ps,{statuses:c.statuses}):null)):null},"StatusChecks"),us=i(({pr:r})=>{const{state:a,reviewRequirement:u}=r;return!u||a!==Ct.Open?null:l.createElement(l.Fragment,null,l.createElement("div",{className:"status-section"},l.createElement("div",{className:"status-item"},l.createElement(Ji,{state:u.state}),l.createElement("p",{className:"status-item-detail-text"},fr(u)))))},"RequiredReviewers"),Wi=i(({pr:r,isSimple:a})=>{if(!a||r.state!==Ct.Open||r.reviewers.length===0)return null;const u=[],c=new Set(r.reviewers);let d=r.events.length-1;for(;d>=0&&c.size>0;){const p=r.events[d];if(p.event===We.Reviewed){for(const C of c)if(p.user.id===C.reviewer.id){u.push({event:p,reviewState:C}),c.delete(C);break}}d--}return l.createElement("div",{className:"section"}," ",u.map(p=>l.createElement(Qo,{key:At(p.reviewState.reviewer),...p})))},"InlineReviewers"),cs=i(({pr:r,isSimple:a})=>r.isIssue?null:l.createElement("div",{id:"status-checks"},l.createElement(l.Fragment,null,l.createElement(Gr,{pr:r,isSimple:a}),l.createElement(us,{pr:r}),l.createElement(as,{pr:r}),l.createElement(Wi,{pr:r,isSimple:a}),l.createElement(ds,{pr:r,isSimple:a}),l.createElement(Nt,{pr:r}))),"StatusChecksSection"),ds=i(({pr:r,isSimple:a})=>{const{create:u,checkMergeability:c}=(0,l.useContext)(Ve);if(a&&r.state!==Ct.Open)return l.createElement("div",{className:"branch-status-container"},l.createElement("form",null,l.createElement("button",{type:"submit",onClick:u},"Create New Pull Request...")));if(r.state!==Ct.Open)return null;const{mergeable:d}=r,[p,C]=(0,l.useState)(d);return d!==p&&d!==kt.Unknown&&C(d),(0,l.useEffect)(()=>{const y=setInterval(async()=>{if(p===kt.Unknown){const E=await c();C(E)}},3e3);return()=>clearInterval(y)},[p]),l.createElement("div",null,l.createElement(Ko,{mergeable:p,isSimple:a,canUpdateBranch:r.canUpdateBranch}),l.createElement(dr,{mergeable:p,isSimple:a,isCurrentlyCheckedOut:r.isCurrentlyCheckedOut,canUpdateBranch:r.canUpdateBranch}),l.createElement(qi,{pr:{...r,mergeable:p},isSimple:a}))},"MergeStatusAndActions"),wa=null,Ko=i(({mergeable:r,isSimple:a,canUpdateBranch:u})=>{const{updateBranch:c}=(0,l.useContext)(Ve),[d,p]=(0,l.useState)(!1),C=i(()=>{p(!0),c().finally(()=>p(!1))},"onClick");let y=ae,E="Checking if this branch can be merged...",L=null;return r===kt.Mergeable?(y=ie,E="This branch has no conflicts with the base branch."):r===kt.Conflict?(y=ce,E="This branch has conflicts that must be resolved.",L="Resolve conflicts"):r===kt.NotMergeable?(y=ce,E="Branch protection policy must be fulfilled before merging."):r===kt.Behind&&(y=ce,E="This branch is out-of-date with the base branch.",L="Update with merge commit"),a&&(y=null,r!==kt.Conflict&&(L=null)),l.createElement("div",{className:"status-item status-section"},y,l.createElement("p",null,E),L&&u?l.createElement("div",{className:"button-container"},l.createElement("button",{className:"secondary",onClick:C,disabled:d},L)):null)},"MergeStatus"),dr=i(({mergeable:r,isSimple:a,isCurrentlyCheckedOut:u,canUpdateBranch:c})=>{const{updateBranch:d}=(0,l.useContext)(Ve),[p,C]=(0,l.useState)(!1),y=i(()=>{C(!0),d().finally(()=>C(!1))},"update"),E=!u&&r===kt.Conflict;return!c||E||a||r===kt.Behind||r===kt.Conflict||r===kt.Unknown?null:l.createElement("div",{className:"status-item status-section"},vt,l.createElement("p",null,"This branch is out-of-date with the base branch."),l.createElement("button",{className:"secondary",onClick:y,disabled:p},"Update with Merge Commit"))},"OfferToUpdate"),fs=i(({isSimple:r})=>{const[a,u]=(0,l.useState)(!1),{readyForReview:c,updatePR:d}=(0,l.useContext)(Ve),p=(0,l.useCallback)(async()=>{try{u(!0);const C=await c();d(C)}finally{u(!1)}},[u,c,d]);return l.createElement("div",{className:"ready-for-review-container"},l.createElement("div",{className:"ready-for-review-text-wrapper"},l.createElement("div",{className:"ready-for-review-icon"},r?null:vt),l.createElement("div",null,l.createElement("div",{className:"ready-for-review-heading"},"This pull request is still a work in progress."),l.createElement("div",{className:"ready-for-review-meta"},"Draft pull requests cannot be merged."))),l.createElement("div",{className:"button-container"},l.createElement("button",{disabled:a,onClick:p},"Ready for Review")))},"ReadyForReview"),Zi=i(r=>{const a=(0,l.useContext)(Ve),u=(0,l.useRef)(),[c,d]=(0,l.useState)(null);return r.mergeQueueMethod?l.createElement("div",null,l.createElement("div",{id:"merge-comment-form"},l.createElement("button",{onClick:i(()=>a.enqueue(),"onClick")},"Add to Merge Queue"))):c?l.createElement(Yi,{pr:r,method:c,cancel:i(()=>d(null),"cancel")}):l.createElement("div",{className:"automerge-section wrapper"},l.createElement("button",{onClick:i(()=>d(u.current.value),"onClick")},"Merge Pull Request"),at,"using method",at,l.createElement(Gi,{ref:u,...r}))},"Merge"),qi=i(({pr:r,isSimple:a})=>{var u;const{hasWritePermission:c,canEdit:d,isDraft:p,mergeable:C}=r;if(p)return d?l.createElement(fs,{isSimple:a}):null;if(C===kt.Mergeable&&c&&!r.mergeQueueEntry)return a?l.createElement(Qi,{...r}):l.createElement(Zi,{...r});if(!a&&c&&!r.mergeQueueEntry){const y=(0,l.useContext)(Ve);return l.createElement(Jt,{updateState:i(E=>y.updateAutoMerge(E),"updateState"),...r,baseHasMergeQueue:!!r.mergeQueueMethod,defaultMergeMethod:(u=r.autoMergeMethod)!=null?u:r.defaultMergeMethod})}else if(r.mergeQueueEntry)return l.createElement(qr,{mergeQueueEntry:r.mergeQueueEntry});return null},"PrActions"),nn=i(()=>{const{openOnGitHub:r}=useContext(PullRequestContext);return React.createElement("button",{id:"merge-on-github",type:"submit",onClick:i(()=>r(),"onClick")},"Merge on github.com")},"MergeOnGitHub"),Qi=i(r=>{const{merge:a,updatePR:u}=(0,l.useContext)(Ve);async function c(p){const C=await a({title:"",description:"",method:p});u(C)}i(c,"submitAction");const d=Object.keys(Xr).filter(p=>r.mergeMethodsAvailability[p]).reduce((p,C)=>(p[C]=Xr[C],p),{});return l.createElement(qo,{options:d,defaultOption:r.defaultMergeMethod,submitAction:c})},"MergeSimple"),Ki=i(r=>{const{deleteBranch:a}=(0,l.useContext)(Ve),[u,c]=(0,l.useState)(!1);return r.isRemoteHeadDeleted!==!1&&r.isLocalHeadDeleted!==!1?l.createElement("div",null):l.createElement("div",{className:"branch-status-container"},l.createElement("form",{onSubmit:i(async d=>{d.preventDefault();try{c(!0);const p=await a();p&&p.cancelled&&c(!1)}finally{c(!1)}},"onSubmit")},l.createElement("button",{disabled:u,className:"secondary",type:"submit"},"Delete Branch...")))},"DeleteBranch");function Yi({pr:r,method:a,cancel:u}){const{merge:c,updatePR:d,changeEmail:p}=(0,l.useContext)(Ve),[C,y]=(0,l.useState)(!1),E=r.emailForCommit;return l.createElement("div",null,l.createElement("form",{id:"merge-comment-form",onSubmit:i(async L=>{L.preventDefault();try{y(!0);const{title:Q,description:$}=L.target,ee=await c({title:Q==null?void 0:Q.value,description:$==null?void 0:$.value,method:a,email:E});d(ee)}finally{y(!1)}},"onSubmit")},a==="rebase"?null:l.createElement("input",{type:"text",name:"title",defaultValue:Vn(a,r)}),a==="rebase"?null:l.createElement("textarea",{name:"description",defaultValue:ms(a,r)}),a==="rebase"||!E?null:l.createElement("div",{className:"commit-association"},l.createElement("span",null,"Commit will be associated with ",l.createElement("button",{className:"input-box",title:"Change email","aria-label":"Change email",disabled:C,onClick:i(()=>{y(!0),p(E).finally(()=>y(!1))},"onClick")},E))),l.createElement("div",{className:"form-actions",id:a==="rebase"?"rebase-actions":""},l.createElement("button",{className:"secondary",onClick:u},"Cancel"),l.createElement("button",{disabled:C,type:"submit",id:"confirm-merge"},a==="rebase"?"Confirm ":"",Xr[a]))))}i(Yi,"ConfirmMerge");function Vn(r,a){var u,c,d,p;switch(r){case"merge":return(c=(u=a.mergeCommitMeta)==null?void 0:u.title)!=null?c:`Merge pull request #${a.number} from ${a.head}`;case"squash":return(p=(d=a.squashCommitMeta)==null?void 0:d.title)!=null?p:`${a.title} (#${a.number})`;default:return""}}i(Vn,"getDefaultTitleText");function ms(r,a){var u,c,d,p;switch(r){case"merge":return(c=(u=a.mergeCommitMeta)==null?void 0:u.description)!=null?c:a.title;case"squash":return(p=(d=a.squashCommitMeta)==null?void 0:d.description)!=null?p:"";default:return""}}i(ms,"getDefaultDescriptionText");const Xr={merge:"Create Merge Commit",squash:"Squash and Merge",rebase:"Rebase and Merge"},Gi=l.forwardRef(({defaultMergeMethod:r,mergeMethodsAvailability:a,onChange:u,ariaLabel:c,name:d,title:p,disabled:C},y)=>l.createElement("select",{ref:y,defaultValue:r,onChange:u,disabled:C,"aria-label":c!=null?c:"Select merge method",name:d,title:p},Object.entries(Xr).map(([E,L])=>l.createElement("option",{key:E,value:E,disabled:!a[E]},L,a[E]?null:" (not enabled)")))),ps=i(({statuses:r})=>l.createElement("div",{className:"status-scroll"},r.map(a=>l.createElement("div",{key:a.id,className:"status-check"},l.createElement("div",{className:"status-check-details"},l.createElement(Yo,{state:a.state}),l.createElement(yt,{for:{avatarUrl:a.avatarUrl,url:a.url}}),l.createElement("span",{className:"status-check-detail-text"},a.workflowName?`${a.workflowName} / `:null,a.context,a.event?` (${a.event})`:null," ",a.description?`\u2014 ${a.description}`:null)),l.createElement("div",null,a.isRequired?l.createElement("span",{className:"label"},"Required"):null,a.targetUrl?l.createElement("a",{href:a.targetUrl,title:a.targetUrl},"Details"):null)))),"StatusCheckDetails");function Xi(r){const a=Dr(r,c=>{switch(c.state){case tt.Success:case tt.Failure:case tt.Neutral:return c.state;default:return tt.Pending}}),u=[];for(const c of Object.keys(a)){const d=a[c].length;let p="";switch(c){case tt.Success:p="successful";break;case tt.Failure:p="failed";break;case tt.Neutral:p="skipped";break;default:p="pending"}const C=d>1?`${d} ${p} checks`:`${d} ${p} check`;u.push(C)}return u.join(" and ")}i(Xi,"getSummaryLabel");function Yo({state:r}){switch(r){case tt.Neutral:return Mn;case tt.Success:return ie;case tt.Failure:return ce}return ae}i(Yo,"StateIcon");function Ji({state:r}){switch(r){case tt.Pending:return Be;case tt.Failure:return ce}return ie}i(Ji,"RequiredReviewStateIcon");function fr(r){const a=r.approvals.length,u=r.requestedChanges.length,c=r.count;switch(r.state){case tt.Failure:return`At least ${c} approving review${c>1?"s":""} is required by reviewers with write access.`;case tt.Pending:return`${u} review${u>1?"s":""} requesting changes by reviewers with write access.`}return`${a} approving review${a>1?"s":""} by reviewers with write access.`}i(fr,"getRequiredReviewSummary");function mr(r){const{displayName:a,canDelete:u,color:c}=r,d=vn(c,r.isDarkTheme,!1);return l.createElement("div",{className:"section-item label",style:{backgroundColor:d.backgroundColor,color:d.textColor,borderColor:`${d.borderColor}`,paddingRight:u?"2px":"8px"}},a,r.children)}i(mr,"Label");function xa(r){const{displayName:a,color:u}=r,c=gitHubLabelColor(u,r.isDarkTheme,!1);return React.createElement("li",{style:{backgroundColor:c.backgroundColor,color:c.textColor,borderColor:`${c.borderColor}`}},a,r.children)}i(xa,"LabelCreate");function rn({id:r,title:a,hasWritePermission:u,onHeaderClick:c,children:d,iconButtonGroup:p}){return l.createElement("div",{id:r,className:"section"},l.createElement("div",{className:`section-header ${u?"clickable":""}`,onClick:u?c:void 0},l.createElement("div",{className:"section-title"},a),u?p||l.createElement("button",{className:"icon-button",title:`Add ${a}`,onClick:c},gt):null),d)}i(rn,"Section");function el({reviewers:r,labels:a,hasWritePermission:u,isIssue:c,projectItems:d,milestone:p,assignees:C,canAssignCopilot:y}){const{addReviewers:E,addAssignees:L,addAssigneeYourself:Q,addAssigneeCopilot:$,addLabels:ee,removeLabel:me,changeProjects:z,addMilestone:we,updatePR:ue,pr:Se}=(0,l.useContext)(Ve),[Ee,Ne]=(0,l.useState)(!1),_e=y&&C.every(Ce=>!zi.includes(Ce.login)),qe=i(async()=>{const Ce=await z();ue({...Ce})},"updateProjects");return l.createElement("div",{id:"sidebar"},!c&&l.createElement(rn,{id:"reviewers",title:"Reviewers",hasWritePermission:u,onHeaderClick:i(async()=>{const Ce=await E();ue({reviewers:Ce.reviewers})},"onHeaderClick")},r&&r.length?r.map(Ce=>l.createElement(Qo,{key:At(Ce.reviewer),reviewState:Ce})):l.createElement("div",{className:"section-placeholder"},"None yet")),l.createElement(rn,{id:"assignees",title:"Assignees",hasWritePermission:u,onHeaderClick:i(async Ce=>{const Ze=Ce==null?void 0:Ce.target;if(Ze!=null&&Ze.closest&&Ze.closest("#assign-copilot-btn"))return;const mt=await L();ue({assignees:mt.assignees,events:mt.events})},"onHeaderClick"),iconButtonGroup:u&&l.createElement("div",{className:"icon-button-group"},_e?l.createElement("button",{id:"assign-copilot-btn",className:"icon-button",title:"Assign for Copilot to work on",disabled:Ee,onClick:i(async Ce=>{Ce.stopPropagation(),Ne(!0);try{const Ze=await $();ue({assignees:Ze.assignees,events:Ze.events})}finally{Ne(!1)}},"onClick")},ve):null,l.createElement("button",{className:"icon-button",title:"Add Assignees"},gt))},C&&C.length?C.map((Ce,Ze)=>l.createElement("div",{key:Ze,className:"section-item reviewer"},l.createElement("div",{className:"avatar-with-author"},l.createElement(yt,{for:Ce}),l.createElement(wt,{for:Ce})))):l.createElement("div",{className:"section-placeholder"},"None yet",Se.hasWritePermission?l.createElement(l.Fragment,null,"\u2014",l.createElement("a",{className:"assign-yourself",onClick:i(async()=>{const Ce=await Q();ue({assignees:Ce.assignees,events:Ce.events})},"onClick")},"assign yourself")):null)),l.createElement(rn,{id:"labels",title:"Labels",hasWritePermission:u,onHeaderClick:i(async()=>{const Ce=await ee();ue({labels:Ce.added})},"onHeaderClick")},a.length?l.createElement("div",{className:"labels-list"},a.map(Ce=>l.createElement(mr,{key:Ce.name,...Ce,canDelete:u,isDarkTheme:Se.isDarkTheme},u?l.createElement("button",{className:"icon-button",onClick:i(()=>me(Ce.name),"onClick")},ce,"\uFE0F"):null))):l.createElement("div",{className:"section-placeholder"},"None yet")),!Se.isEnterprise&&l.createElement(rn,{id:"project",title:"Project",hasWritePermission:u,onHeaderClick:qe},d?d.length>0?d.map(Ce=>l.createElement(hs,{key:Ce.project.title,...Ce,canDelete:u})):l.createElement("div",{className:"section-placeholder"},"None yet"):l.createElement("a",{onClick:qe},"Sign in with more permissions to see projects")),l.createElement(rn,{id:"milestone",title:"Milestone",hasWritePermission:u,onHeaderClick:i(async()=>{const Ce=await we();ue({milestone:Ce.added})},"onHeaderClick")},p?l.createElement(nl,{key:p.title,...p,canDelete:u}):l.createElement("div",{className:"section-placeholder"},"No milestone")))}i(el,"Sidebar");function Go(r){const[a,u]=(0,l.useState)(!1),c=(0,l.useRef)(null);return l.createElement("div",{className:"collapsible-sidebar"},l.createElement("div",{className:`collapsible-sidebar-header ${a?"expanded":""}`,onClick:i(()=>u(d=>!d),"onClick"),tabIndex:0,role:"button","aria-expanded":a},l.createElement("span",{className:"collapsible-sidebar-title"},a?null:l.createElement(tl,{...r}))),l.createElement("div",{className:"collapsible-sidebar-content",ref:c,style:{display:a?"block":"none"}},l.createElement(el,{...r})),l.createElement("a",{className:"collapsible-label-see-more",onClick:i(()=>u(d=>!d),"onClick")},a?"See less":"See more"))}i(Go,"CollapsibleSidebar");function tl(r){const{reviewers:a,assignees:u,labels:c,projectItems:d,milestone:p,isIssue:C}=r,[y,E]=(0,l.useState)(!1);(0,l.useEffect)(()=>{const z=i(()=>{E(window.innerWidth<=350)},"checkViewportWidth");return z(),window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[]);const L=i(({users:z})=>l.createElement("span",{className:"avatar-stack",style:{width:`${Math.min(z.length,10)*10+10}px`}},z.slice(0,10).map((we,ue)=>l.createElement("span",{className:"stacked-avatar",style:{left:`${ue*10}px`}},l.createElement(yt,{for:we})))),"AvatarStack"),Q=i(({items:z,getKey:we,getColor:ue,getText:Se})=>{const Ee=(0,l.useRef)(null),[Ne,_e]=(0,l.useState)(z.length);(0,l.useEffect)(()=>{if(!Ee.current||z.length===0)return;const Ze=new ResizeObserver(()=>{const mt=Ee.current;if(!mt)return;const bn=mt.offsetWidth,ot=60;let Ge=z.length,It=z.reduce((Qe,Rt)=>Qe+Se(Rt).length,0);for(;Ge>0&&!(It*6+14*Ge+(Ge<z.length?ot:0)<=bn);)It-=Se(z[Ge-1]).length,Ge--;_e(Math.max(1,Ge))});return Ze.observe(Ee.current),()=>Ze.disconnect()},[z.length]);const qe=z.slice(0,Ne),Ce=z.length-Ne;return l.createElement("span",{className:"pill-container",ref:Ee},qe.map(Ze=>{const mt=ue(Ze);return l.createElement("span",{key:we(Ze),className:"pill-item label",style:{backgroundColor:mt.backgroundColor,color:mt.textColor,borderRadius:"20px"},title:Se(Ze)},Se(Ze))}),Ce>0&&l.createElement("span",{className:"pill-overflow"},"+",Ce," more"))},"PillContainer"),$=[],ee=a==null?void 0:a.filter(z=>!!z.reviewer.avatarUrl).map(z=>({avatarUrl:z.reviewer.avatarUrl,name:Bt(z.reviewer)}));!C&&ee&&ee.length&&$.push({label:"Reviewers",value:l.createElement(L,{users:ee}),count:ee.length});const me=u==null?void 0:u.filter(z=>!!z.avatarUrl).map(z=>({avatarUrl:z.avatarUrl,name:Bt(z)}));return me&&me.length&&$.push({label:"Assignees",value:l.createElement(L,{users:me}),count:me.length}),c&&c.length&&$.push({label:"Labels",value:l.createElement(Q,{items:c,getKey:i(z=>z.name,"getKey"),getColor:i(z=>vn(z.color,r==null?void 0:r.isDarkTheme,!1),"getColor"),getText:i(z=>z.name,"getText")}),count:c.length}),d&&d.length&&$.push({label:"Project",value:l.createElement(Q,{items:d,getKey:i(z=>z.project.title,"getKey"),getColor:i(()=>vn("#ededed",r==null?void 0:r.isDarkTheme,!1),"getColor"),getText:i(z=>z.project.title,"getText")}),count:d.length}),p&&$.push({label:"Milestone",value:l.createElement(Q,{items:[p],getKey:i(z=>z.title,"getKey"),getColor:i(()=>vn("#ededed",r==null?void 0:r.isDarkTheme,!1),"getColor"),getText:i(z=>z.title,"getText")}),count:1}),$.length?l.createElement("span",{className:"collapsed-label"},$.map(z=>l.createElement("span",{className:"collapsed-section",key:z.label},l.createElement("span",{className:"collapsed-section-label"},z.label),y?l.createElement("span",{className:"collapsed-section-count"},z.count):z.value))):l.createElement("span",{className:"collapsed-label"},C?"Assignees, Labels, Project, and Milestone":"Reviewers, Assignees, Labels, Project, and Milestone")}i(tl,"CollapsedLabel");function nl(r){const{removeMilestone:a,updatePR:u,pr:c}=(0,l.useContext)(Ve),d=getComputedStyle(document.documentElement).getPropertyValue("--vscode-badge-foreground"),p=vn(d,c.isDarkTheme,!1),{canDelete:C,title:y}=r;return l.createElement("div",{className:"labels-list"},l.createElement("div",{className:"section-item label",style:{backgroundColor:p.backgroundColor,color:p.textColor,borderColor:`${p.borderColor}`}},y,C?l.createElement("button",{className:"icon-button",onClick:i(async()=>{await a(),u({milestone:void 0})},"onClick")},ce,"\uFE0F"):null))}i(nl,"Milestone");function hs(r){const{removeProject:a,updatePR:u,pr:c}=(0,l.useContext)(Ve),d=getComputedStyle(document.documentElement).getPropertyValue("--vscode-badge-foreground"),p=vn(d,c.isDarkTheme,!1),{canDelete:C}=r;return l.createElement("div",{className:"labels-list"},l.createElement("div",{className:"section-item label",style:{backgroundColor:p.backgroundColor,color:p.textColor,borderColor:`${p.borderColor}`}},r.project.title,C?l.createElement("button",{className:"icon-button",onClick:i(async()=>{var y;await a(r),u({projectItems:(y=c.projectItems)==null?void 0:y.filter(E=>E.id!==r.id)})},"onClick")},ce,"\uFE0F"):null))}i(hs,"Project");var gs=(r=>(r[r.ADD=0]="ADD",r[r.COPY=1]="COPY",r[r.DELETE=2]="DELETE",r[r.MODIFY=3]="MODIFY",r[r.RENAME=4]="RENAME",r[r.TYPE=5]="TYPE",r[r.UNKNOWN=6]="UNKNOWN",r[r.UNMERGED=7]="UNMERGED",r))(gs||{});const ni=class ni{constructor(a,u,c,d,p,C,y){this.baseCommit=a,this.status=u,this.fileName=c,this.previousFileName=d,this.patch=p,this.diffHunks=C,this.blobUrl=y}};i(ni,"file_InMemFileChange");let rl=ni;const qn=class qn{constructor(a,u,c,d,p){this.baseCommit=a,this.blobUrl=u,this.status=c,this.fileName=d,this.previousFileName=p}};i(qn,"file_SlimFileChange");let ol=qn;var vs=Object.defineProperty,pr=i((r,a,u)=>a in r?vs(r,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[a]=u,"diffHunk_defNormalProp"),Cs=i((r,a,u)=>pr(r,typeof a!="symbol"?a+"":a,u),"diffHunk_publicField"),il=(r=>(r[r.Context=0]="Context",r[r.Add=1]="Add",r[r.Delete=2]="Delete",r[r.Control=3]="Control",r))(il||{});const so=class so{constructor(a,u,c,d,p,C=!0){this.type=a,this.oldLineNumber=u,this.newLineNumber=c,this.positionInHunk=d,this.raw=p,this.endwithLineBreak=C}get text(){return this.raw.substr(1)}};i(so,"DiffLine");let Bn=so;function ll(r){switch(r[0]){case" ":return 0;case"+":return 1;case"-":return 2;default:return 3}}i(ll,"getDiffChangeType");const ao=class ao{constructor(a,u,c,d,p){this.oldLineNumber=a,this.oldLength=u,this.newLineNumber=c,this.newLength=d,this.positionInHunk=p,Cs(this,"diffLines",[])}};i(ao,"DiffHunk");let Jr=ao;const Xo=/^@@ \-(\d+)(,(\d+))?( \+(\d+)(,(\d+)?)?)? @@/;function sl(r){let a=0,u=0;for(;(u=r.indexOf("\r",u))!==-1;)u++,a++;return a}i(sl,"countCarriageReturns");function*hr(r){let a=0;for(;a!==-1&&a<r.length;){const u=a;a=r.indexOf(`
`,a);let d=(a!==-1?a:r.length)-u;a!==-1&&(a>0&&r[a-1]==="\r"&&d--,a++),yield r.substr(u,d)}}i(hr,"LineReader");function*Jo(r){const a=hr(r);let u=a.next(),c,d=-1,p=-1,C=-1;for(;!u.done;){const y=u.value;if(Xo.test(y)){c&&(yield c,c=void 0),d===-1&&(d=0);const E=Xo.exec(y),L=p=Number(E[1]),Q=Number(E[3])||1,$=C=Number(E[5]),ee=Number(E[7])||1;c=new Jr(L,Q,$,ee,d),c.diffLines.push(new Bn(3,-1,-1,d,y))}else if(c){const E=ll(y);if(E===3)c.diffLines&&c.diffLines.length&&(c.diffLines[c.diffLines.length-1].endwithLineBreak=!1);else{c.diffLines.push(new Bn(E,E!==1?p:-1,E!==2?C:-1,d,y));const L=1+sl(y);switch(E){case 0:p+=L,C+=L;break;case 2:p+=L;break;case 1:C+=L;break}}}d!==-1&&++d,u=a.next()}c&&(yield c)}i(Jo,"parseDiffHunk");function gr(r){const a=Jo(r);let u=a.next();const c=[];for(;!u.done;){const d=u.value;c.push(d),u=a.next()}return c}i(gr,"parsePatch");function Ea(r){const a=[],u=i(E=>({diffLines:[],newLength:0,oldLength:0,oldLineNumber:E.oldLineNumber,newLineNumber:E.newLineNumber,positionInHunk:0}),"newHunk");let c,d;const p=i((E,L)=>{E.diffLines.push(L),L.type===2?E.oldLength++:L.type===1?E.newLength++:L.type===0&&(E.oldLength++,E.newLength++)},"addLineToHunk"),C=i(E=>E.diffLines.some(L=>L.type!==0),"hunkHasChanges"),y=i(E=>C(E)&&E.diffLines[E.diffLines.length-1].type===0,"hunkHasSandwichedChanges");for(const E of r.diffLines)E.type===0?(c||(c=u(E)),p(c,E),y(c)&&(d||(d=u(E)),p(d,E))):(c||r.oldLineNumber===1&&(E.type===2||E.type===1))&&(c||(c=u(E)),y(c)&&(a.push(c),c=d,d=void 0),(E.type===2||E.type===1)&&p(c,E));return c&&a.push(c),a}i(Ea,"splitIntoSmallerHunks");function ba(r,a){const u=r.split(/\r?\n/),c=Jo(a);let d=c.next();const p=[],C=[];let y=0,E=!0;for(;!d.done;){const L=d.value;p.push(L);const Q=L.oldLineNumber;for(let $=y+1;$<Q;$++)C.push(u[$-1]);y=Q+L.oldLength-1;for(let $=0;$<L.diffLines.length;$++){const ee=L.diffLines[$];if(!(ee.type===2||ee.type===3))if(ee.type===1)C.push(ee.text);else{const me=ee.text;C.push(me)}}if(d=c.next(),d.done){for(let $=L.diffLines.length-1;$>=0;$--)if(L.diffLines[$].type!==2){E=L.diffLines[$].endwithLineBreak;break}}}if(E)if(y<u.length)for(let L=y+1;L<=u.length;L++)C.push(u[L-1]);else C.push("");return C.join(`
`)}i(ba,"getModifiedContentFromDiffHunk");function En(r){switch(r){case"removed":return GitChangeType.DELETE;case"added":return GitChangeType.ADD;case"renamed":return GitChangeType.RENAME;case"modified":return GitChangeType.MODIFY;default:return GitChangeType.UNKNOWN}}i(En,"getGitChangeType");async function ka(r,a){var u;const c=[];for(let d=0;d<r.length;d++){const p=r[d],C=En(p.status);if(!p.patch&&C!==GitChangeType.RENAME&&C!==GitChangeType.MODIFY&&!(C===GitChangeType.ADD&&p.additions===0)){c.push(new SlimFileChange(a,p.blob_url,C,p.filename,p.previous_filename));continue}const y=p.patch?gr(p.patch):void 0;c.push(new InMemFileChange(a,C,p.filename,p.previous_filename,(u=p.patch)!=null?u:"",y,p.blob_url))}return c}i(ka,"parseDiff");function vr({hunks:r}){return l.createElement("div",{className:"diff"},r.map((a,u)=>l.createElement(al,{key:u,hunk:a})))}i(vr,"Diff");const ys=vr,al=i(({hunk:r,maxLines:a=8})=>l.createElement(l.Fragment,null,r.diffLines.slice(-a).map(u=>l.createElement("div",{key:zn(u),className:`diffLine ${Cr(u.type)}`},l.createElement(eo,{num:u.oldLineNumber}),l.createElement(eo,{num:u.newLineNumber}),l.createElement("div",{className:"diffTypeSign"},u.raw.substr(0,1)),l.createElement("div",{className:"lineContent"},u.raw.substr(1))))),"Hunk"),zn=i(r=>`${r.oldLineNumber}->${r.newLineNumber}`,"keyForDiffLine"),eo=i(({num:r})=>l.createElement("div",{className:"lineNumber"},r>0?r:" "),"LineNumber"),Cr=i(r=>il[r].toLowerCase(),"getDiffChangeClass");function to(r){return r.event===We.Assigned||r.event===We.Unassigned}i(to,"isAssignUnassignEvent");const ul=i(({events:r,isIssue:a})=>{var u,c,d,p;const C=[];for(let y=0;y<r.length;y++)if(y>0&&to(r[y])&&to(C[C.length-1])){const E=C[C.length-1],L=r[y];if(E.actor.login===L.actor.login&&new Date(E.createdAt).getTime()+1e3*60*10>new Date(L.createdAt).getTime()){const Q=E.assignees||[],$=E.unassignees||[],ee=(c=(u=L.assignees)==null?void 0:u.filter(z=>!Q.some(we=>we.id===z.id)))!=null?c:[],me=(p=(d=L.unassignees)==null?void 0:d.filter(z=>!$.some(we=>we.id===z.id)))!=null?p:[];E.assignees=[...Q,...ee],E.unassignees=[...$,...me]}else C.push(L)}else C.push(r[y]);return l.createElement(l.Fragment,null,C.map(y=>{switch(y.event){case We.Committed:return l.createElement(ws,{key:`commit${y.id}`,...y});case We.Reviewed:return l.createElement(bs,{key:`review${y.id}`,...y});case We.Commented:return l.createElement(Ss,{key:`comment${y.id}`,...y});case We.Merged:return l.createElement(Ms,{key:`merged${y.id}`,...y});case We.Assigned:return l.createElement(dl,{key:`assign${y.id}`,event:y});case We.Unassigned:return l.createElement(dl,{key:`unassign${y.id}`,event:y});case We.HeadRefDeleted:return l.createElement(Ts,{key:`head${y.id}`,...y});case We.CrossReferenced:return l.createElement(Ls,{key:`cross${y.id}`,...y});case We.Closed:return l.createElement(ei,{key:`closed${y.id}`,event:y,isIssue:a});case We.Reopened:return l.createElement(jn,{key:`reopened${y.id}`,event:y,isIssue:a});case We.NewCommitsSinceReview:return l.createElement(xs,{key:`newCommits${y.id}`});case We.CopilotStarted:return l.createElement(Ye,{key:`copilotStarted${y.id}`,...y});case We.CopilotFinished:return l.createElement(nt,{key:`copilotFinished${y.id}`,...y});case We.CopilotFinishedError:return l.createElement(on,{key:`copilotFinishedError${y.id}`,...y});default:throw new Ar(y)}}))},"Timeline"),_a=null,ws=i(r=>{var a;const u=(0,l.useContext)(Ve),[c,d]=(0,l.useState)(void 0),p=i((y,E)=>{y.preventDefault(),d(E),u.openCommitChanges(r.sha).finally(()=>{d(void 0)})},"handleCommitClick"),C=((a=u.pr)==null?void 0:a.loadingCommit)===r.sha;return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},ct,at,l.createElement("div",{className:"avatar-container"},l.createElement(yt,{for:r.author})),l.createElement("div",{className:"message-container"},l.createElement("a",{className:"message",onClick:i(y=>p(y,"title"),"onClick"),title:r.htmlUrl},r.message.substr(0,r.message.indexOf(`
`)>-1?r.message.indexOf(`
`):r.message.length)),C&&c==="title"&&l.createElement("span",{className:"commit-spinner-inline"},w))),l.createElement("div",{className:"timeline-detail"},l.createElement("a",{className:"sha",onClick:i(y=>p(y,"sha"),"onClick"),title:r.htmlUrl},C&&c==="sha"&&l.createElement("span",{className:"commit-spinner-before"},w),r.sha.slice(0,7)),l.createElement(bt,{date:r.committedDate})))},"CommitEventView"),xs=i(()=>{const{gotoChangesSinceReview:r,pr:a}=(0,l.useContext)(Ve);if(!a.isCurrentlyCheckedOut)return null;const[u,c]=(0,l.useState)(!1),d=i(async()=>{c(!0),await r(),c(!1)},"viewChanges");return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},F,at,l.createElement("span",{style:{fontWeight:"bold"}},"New changes since your last Review")),l.createElement("button",{"aria-live":"polite",title:"View the changes since your last review",onClick:d,disabled:u},"View Changes"))},"NewCommitsSinceReviewEventView"),Es=i(r=>r.position!==null?`pos:${r.position}`:`ori:${r.originalPosition}`,"positionKey"),no=i(r=>Dr(r,a=>a.path+":"+Es(a)),"groupCommentsByPath"),bs=i(r=>{const a=no(r.comments),u=r.state==="PENDING";return l.createElement(Wr,{comment:r,allowEmpty:!0},r.comments.length?l.createElement("div",{className:"comment-body review-comment-body"},Object.entries(a).map(([c,d])=>l.createElement(ks,{key:c,thread:d,event:r}))):null,u?l.createElement(_s,null):null)},"ReviewEventView");function ks({thread:r,event:a}){var u;const c=r[0],[d,p]=(0,l.useState)(!c.isResolved),[C,y]=(0,l.useState)(!!c.isResolved),{openDiff:E,toggleResolveComment:L}=(0,l.useContext)(Ve),Q=a.reviewThread&&(a.reviewThread.canResolve&&!a.reviewThread.isResolved||a.reviewThread.canUnresolve&&a.reviewThread.isResolved),$=i(()=>{if(a.reviewThread){const ee=!C;p(!ee),y(ee),L(a.reviewThread.threadId,r,ee)}},"toggleResolve");return l.createElement("div",{key:a.id,className:"diff-container"},l.createElement("div",{className:"resolved-container"},l.createElement("div",null,c.position===null?l.createElement("span",null,l.createElement("span",null,c.path),l.createElement("span",{className:"outdatedLabel"},"Outdated")):l.createElement("a",{className:"diffPath",onClick:i(()=>E(c),"onClick")},c.path),!C&&!d?l.createElement("span",{className:"unresolvedLabel"},"Unresolved"):null),l.createElement("button",{className:"secondary",onClick:i(()=>p(!d),"onClick")},d?"Hide":"Show")),d?l.createElement("div",null,l.createElement(ys,{hunks:(u=c.diffHunks)!=null?u:[]}),r.map(ee=>l.createElement(Wr,{key:ee.id,comment:ee})),Q?l.createElement("div",{className:"resolve-comment-row"},l.createElement("button",{className:"secondary comment-resolve",onClick:i(()=>$(),"onClick")},C?"Unresolve Conversation":"Resolve Conversation")):null):null)}i(ks,"CommentThread");function _s(){const{requestChanges:r,approve:a,submit:u,deleteReview:c,pr:d}=(0,l.useContext)(Ve),p=d==null?void 0:d.isAuthor,C=(0,l.useRef)(),[y,E]=(0,l.useState)(!1),[L,Q]=(0,l.useState)("");async function $(ue,Se){ue.preventDefault();const Ee=L;switch(E(!0),Se){case Ue.RequestChanges:await r(Ee);break;case Ue.Approve:await a(Ee);break;default:await u(Ee)}E(!1)}i($,"submitAction");async function ee(ue){ue.preventDefault(),E(!0),await c(),E(!1)}i(ee,"cancelReview");const me=i(ue=>{(ue.ctrlKey||ue.metaKey)&&ue.key==="Enter"&&$(ue,Ue.Comment)},"onKeyDown"),z=i(ue=>{Q(ue.target.value)},"onTextareaChange"),we=!L.trim()&&!d.hasReviewDraft;return l.createElement("form",null,l.createElement("textarea",{id:"pending-review",ref:C,placeholder:"Leave a review summary comment",onKeyDown:me,onChange:z,value:L}),l.createElement("div",{className:"form-actions"},l.createElement("button",{id:"cancel-review",className:"secondary",disabled:y||(d==null?void 0:d.busy),onClick:ee},"Cancel Review"),p?null:l.createElement("button",{id:"request-changes",className:"secondary",disabled:y||d.busy||we,onClick:i(ue=>$(ue,Ue.RequestChanges),"onClick")},"Request Changes"),p?null:l.createElement("button",{id:"approve",className:"secondary",disabled:y||d.busy,onClick:i(ue=>$(ue,Ue.Approve),"onClick")},"Approve"),l.createElement("button",{disabled:y||d.busy||we,onClick:i(ue=>$(ue,Ue.Comment),"onClick")},"Submit Review")))}i(_s,"AddReviewSummaryComment");const Ss=i(r=>l.createElement(Wr,{headerInEditMode:!0,comment:r}),"CommentEventView"),Ms=i(r=>{const{revert:a,pr:u}=(0,l.useContext)(Ve);return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},dt,at,l.createElement("div",{className:"avatar-container"},l.createElement(yt,{for:r.user})),l.createElement(wt,{for:r.user}),l.createElement("div",{className:"message"},"merged commit",at,l.createElement("a",{className:"sha",href:r.commitUrl,title:r.commitUrl},r.sha.substr(0,7)),at,"into ",r.mergeRef,at)),u.revertable?l.createElement("div",{className:"timeline-detail"},l.createElement("button",{className:"secondary",disabled:u.busy,onClick:a},"Revert")):null,l.createElement(bt,{href:r.url,date:r.createdAt}))},"MergedEventView"),Ts=i(r=>l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},l.createElement("div",{className:"avatar-container"},l.createElement(yt,{for:r.actor})),l.createElement(wt,{for:r.actor}),l.createElement("div",{className:"message"},"deleted the ",r.headRef," branch",at)),l.createElement(bt,{date:r.createdAt})),"HeadDeleteEventView"),Ls=i(r=>{const{source:a}=r;return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},l.createElement("div",{className:"avatar-container"},l.createElement(yt,{for:r.actor})),l.createElement(wt,{for:r.actor}),l.createElement("div",{className:"message"},"linked ",l.createElement("a",{href:a.extensionUrl},"#",a.number)," ",a.title,at,r.willCloseTarget?"which will close this issue":"")),l.createElement(bt,{date:r.createdAt}))},"CrossReferencedEventView");function cl(r){return r.length===0?l.createElement(l.Fragment,null):r.length===1?r[0]:r.length===2?l.createElement(l.Fragment,null,r[0]," and ",r[1]):l.createElement(l.Fragment,null,r.slice(0,-1).map(a=>l.createElement(l.Fragment,null,a,", "))," and ",r[r.length-1])}i(cl,"timeline_joinWithAnd");const dl=i(({event:r})=>{const{actor:a}=r,u=r.assignees||[],c=r.unassignees||[],d=cl(u.map(y=>l.createElement(wt,{key:`${y.id}a`,for:y}))),p=cl(c.map(y=>l.createElement(wt,{key:`${y.id}u`,for:y})));let C;return u.length>0&&c.length>0?C=l.createElement(l.Fragment,null,"assigned ",d," and unassigned ",p):u.length>0?C=l.createElement(l.Fragment,null,"assigned ",d):C=l.createElement(l.Fragment,null,"unassigned ",p),l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},l.createElement("div",{className:"avatar-container"},l.createElement(yt,{for:a})),l.createElement(wt,{for:a}),l.createElement("div",{className:"message"},C)),l.createElement(bt,{date:r.createdAt}))},"AssignUnassignEventView"),ei=i(({event:r,isIssue:a})=>{const{actor:u,createdAt:c}=r;return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},l.createElement("div",{className:"avatar-container"},l.createElement(yt,{for:u})),l.createElement(wt,{for:u}),l.createElement("div",{className:"message"},a?"closed this issue":"closed this pull request")),l.createElement(bt,{date:c}))},"ClosedEventView"),jn=i(({event:r,isIssue:a})=>{const{actor:u,createdAt:c}=r;return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},l.createElement("div",{className:"avatar-container"},l.createElement(yt,{for:u})),l.createElement(wt,{for:u}),l.createElement("div",{className:"message"},a?"reopened this issue":"reopened this pull request")),l.createElement(bt,{date:c}))},"ReopenedEventView"),Ye=i(r=>{const{createdAt:a,onBehalfOf:u,sessionLink:c}=r,{openSessionLog:d}=(0,l.useContext)(Ve),p=i(C=>{c&&(c.openToTheSide=C.ctrlKey||C.metaKey,d(c))},"handleSessionLogClick");return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},ho,at,l.createElement("div",{className:"message"},"Copilot started work on behalf of ",l.createElement(wt,{for:u}))),c?l.createElement("div",{className:"timeline-detail"},l.createElement("a",{onClick:p},l.createElement("button",{className:"secondary",title:"View session log (Ctrl/Cmd+Click to open in second editor group)"},"View session"))):null,l.createElement(bt,{date:a}))},"CopilotStartedEventView"),nt=i(r=>{const{createdAt:a,onBehalfOf:u}=r;return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},Ot,at,l.createElement("div",{className:"message"},"Copilot finished work on behalf of ",l.createElement(wt,{for:u}))),l.createElement(bt,{date:a}))},"CopilotFinishedEventView"),on=i(r=>{const{createdAt:a,onBehalfOf:u}=r,{openSessionLog:c}=(0,l.useContext)(Ve),d=i(p=>{r.sessionLink.openToTheSide=p.ctrlKey||p.metaKey,c(r.sessionLink)},"handleSessionLogClick");return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"timeline-with-detail"},l.createElement("div",{className:"commit-message"},Xe,at,l.createElement("div",{className:"message"},"Copilot stopped work on behalf of ",l.createElement(wt,{for:u})," due to an error")),l.createElement("div",{className:"commit-message-detail"},l.createElement("a",{onClick:d,title:"View session log (Ctrl/Cmd+Click to open in second editor group)"},"Copilot has encountered an error. See logs for additional details."))),l.createElement(bt,{date:a}))},"CopilotFinishedErrorEventView"),ft=i(r=>{const[a,u]=l.useState(window.matchMedia(r).matches);return l.useEffect(()=>{const c=window.matchMedia(r),d=i(()=>u(c.matches),"documentChangeHandler");return c.addEventListener("change",d),()=>{c.removeEventListener("change",d)}},[r]),a},"useMediaQuery"),_t=i(r=>{const a=ft("(max-width: 768px)");return l.createElement(l.Fragment,null,l.createElement("div",{id:"title",className:"title"},l.createElement("div",{className:"details"},l.createElement(Vo,{...r}))),a?l.createElement(l.Fragment,null,l.createElement(Go,{...r}),l.createElement(ln,{...r})):l.createElement(l.Fragment,null,l.createElement(ln,{...r}),l.createElement(el,{...r})))},"Overview"),ln=i(r=>l.createElement("div",{id:"main"},l.createElement("div",{id:"description"},l.createElement(Wr,{isPRDescription:!0,comment:r})),l.createElement(ul,{events:r.events,isIssue:r.isIssue}),l.createElement(cs,{pr:r,isSimple:!1}),l.createElement(Io,{...r})),"Main");function Un(){(0,oe.render)(l.createElement(St,null,r=>l.createElement(_t,{...r})),document.getElementById("app"))}i(Un,"main");function St({children:r}){const a=(0,l.useContext)(Ve),[u,c]=(0,l.useState)(a.pr);return(0,l.useEffect)(()=>{a.onchange=c,c(a.pr)},[]),window.onscroll=R(()=>{a.postMessage({command:"scroll",args:{scrollPosition:{x:window.scrollX,y:window.scrollY}}})},200),a.postMessage({command:"ready"}),a.postMessage({command:"pr.debug",args:"initialized "+(u?"with PR":"without PR")}),u?r(u):l.createElement("div",{className:"loading-indicator"},"Loading...")}i(St,"Root"),addEventListener("load",Un)})()})();
