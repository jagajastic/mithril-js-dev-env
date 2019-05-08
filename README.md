# mithril-js-dev-env
Javascript Development environment starter kit for mithril Js

# Editor Configuration
This helps to Automate the line spacing, trailing whitespace, space and size of the tab. Therefore keeping consistency in development

# Setup Editor config for your Editor
Step 1. Create a '.editorconfig' file in your root direction

Sept 2. Goto https://editorconfig.org/ to get the config that suit you

Step 3. Paste it in the editorconfig file your just create

Supported properties for VS Code
```
indent_style
indent_size
tab_width
end_of_line
insert_final_newline
trim_trailing_whitespace
```

# Incase of error wihil configuring Babel and webpack to bundle

This error is case by the loader, so install the latest babel 7

<code> npm install babel-loader@7 --save-dev</code>