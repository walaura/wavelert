export var css =
`.wavelert-u-glyph.wavelert-u-glyph--close:before {
	content: url(data:image/gif;base64,R0lGODlhCAAHAIAAAP///wAAACH5BAEAAAAALAAAAAAIAAcAQAINTIBgaJt9VGTHOZokLgA7);
}

.wavelert-u-glyph.wavelert-u-glyph--alert:before {
	content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVBJREFUeNq8lz0OwjAMhWO3CxsDO4dgh3O0VwEBHbgKvQYSMzdhhoEhJFWL2tCmtePGUtQ/JNtf3nMpKEYU+5Vuzk+XJ2itVbSwyfV7U636Fjm7LbhZ7OQ9RWScIjCUSKsIRS3CBlK6Px7WQ4/BrCunCJTQhUNBnsBI90EUUModXAoo1D2bQkqtGBYPcLwPTff2aJ7LERjoXo9ckyiIaYCrBRTae7YWxAlQKeAM3ZMokAmY4rzXVApA7d5nQ89v8/pW2X4bsgi4yXydTqGAnL1vsA/hp2iB5QL7N6x9DHEEcpTfHr2hjsAAr4vMBeD43nECTCHhOsK4oAwhoD0vIxIFFJp65OkIAJlZbALgG2YUCilTgOQtcCNJksoRqCJGLcRuIbf7q0D1Oe+2yxjJfy5AxO7+WTGayTY3hPyvMPcD0aoz4q6UfRooYyW3zX8FGADQwNExSLCogAAAAABJRU5ErkJggg==)
}

.wavelert-u-surface {
	background: #c0c0c0;
	color: #000;
	text-decoration: inherit;
	padding: 1px;
	position: relative;
	font: 1em tahoma, verdana, sans-serif;
	letter-spacing: .5px;
	-webkit-font-smoothing: none;
	font-smoothing: none;
	border: 1px solid #000;
	border-top-color: rgba(255,255,255,.75);
	border-left-color: rgba(255,255,255,.75);
	-webkit-user-select: none;
	-webkit-user-drag: none;
	user-select: none;
	user-drag: none;
	cursor: default;
	pointer-events:all;
}
.wavelert-u-surface:after,
.wavelert-u-surface:before {
	content: '\\0020';
	position: absolute;
	z-index: 9;
	pointer-events: none;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
.wavelert-u-surface:before {
	border: 1px solid transparent;
	border-right-color: rgba(0,0,0,.5);
	border-bottom-color: rgba(0,0,0,.5);
}
.wavelert-u-surface * {
	z-index: 10;
}
.wavelert-u-surfaceActive {
	background: #000080;
	color: #fff;
}

.wavelert-u-theme--pink .wavelert-u-surface {
	background: #d068d9;
}
.wavelert-u-theme--pink .wavelert-u-surfaceActive {
	background: #00ff00;
}

.wavelert-wrapper {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: scroll;
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	padding-bottom: 4em;
	pointer-events:none;
}
.wavelert-wrapper--dark {
	pointer-events: all;
	background: url(data:image/gif;base64,R0lGODlhAgACAIAAAP///wAAACH5BAEAAAAALAAAAAACAAIAQAIDDBAFADs=);
}

.wavelert-button {
	padding: .25em 1em .4em;
	text-align: center;
	display: inline-block;
}
.wavelert-button:active {
	border-bottom-color: rgba(255,255,255,.75);
	border-right-color: rgba(255,255,255,.75);
	border-left-color: #000;
	border-top-color: #000;
}
.wavelert-button:active:before {
	border-top-color: rgba(0,0,0,.25);
	border-left-color: rgba(0,0,0,.25);
	border-right-color: rgba(255,255,255,.25);
	border-bottom-color: rgba(255,255,255,.25);
}

.wavelert-button:focus {
	outline: none;
}
.wavelert-button:focus:after {
	border: 1px dotted #000;
	margin: 1px 2px 2px 1px;
}

.wavelert-window {
	padding: 2px;
	border: 1px solid rgba(0,0,0,1);
	border-top: none;
	border-left: none;
	max-width: 300px;
	font-size: .7em;
	position: relative;
}

.wavelert-window:before {
	border-top-color: rgba(255,255,255,.75);
	border-left-color: rgba(255,255,255,.75);
}

.wavelert-title {
	padding: .25em .25em .25em .5em;
	height: 1.2em;
	font-weight: 800;
    background-image: linear-gradient(to right, rgba(255,255,255,0),rgba(255,255,255,1)), linear-gradient(to right, rgba(255,255,255,0),rgba(255,255,255,.2));
    background-blend-mode: overlay, lighten;
}
.wavelert-title-button {
	float: right;
	height: 1.1em;
	width: 1.25em;
	padding: 0;
	color: #000;
	text-align: center;
	font-weight: 800;
	line-height: .9em;
}


.wavelert-dialog {
	padding: 1em;
}

.wavelert-dialog-message {
	margin-bottom: 1.25em;
	overflow: hidden;
	display: flex;
}

.wavelert-dialog-message .wavelert-u-glyph {
	float: left;
	margin-right: 1em;
}

.wavelert-dialog-buttons {
	text-align: center;
}

.wavelert-dialog-buttons .wavelert-button {
	width: 5em;
}`;

export var windowTemplate =
`<div class="wavelert-wrapper">
	<div class="wavelert-u-surface wavelert-window">
		<div class="wavelert-u-surfaceActive wavelert-title">
			<div class="wavelert-u-surface wavelert-button wavelert-title-button"><span class="wavelert-js-close wavelert-u-glyph wavelert-u-glyph--close"></span></div>
		</div>
		<div class="wavelert-dialog">
			<div class="wavelert-dialog-message"></div>
			<div class="wavelert-dialog-buttons"></div>
		</div>
	</div>
</div>`;