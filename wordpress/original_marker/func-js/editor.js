(function (richText, element, editor) {
  richText.registerFormatType(`my-editor/${myEditorObj[0].item}`, {
    title: myEditorObj[0].title,
    tagName: 'mark',
    className: myEditorObj[0].class,
    edit: function (args) {
      return element.createElement(editor.RichTextToolbarButton, {
        icon: 'admin-customizer',
        title: myEditorObj[0].title,
        onClick: function () {
          args.onChange(richText.toggleFormat(args.value, {
            type: `my-editor/${myEditorObj[0].item}`
          }));
        },
        isActive: args.isActive,
      })
    }
  }),
  richText.registerFormatType(`my-editor/${myEditorObj[1].item}`, {
    title: myEditorObj[1].title,
    tagName: 'mark',
    className: myEditorObj[1].class,
    edit: function (args) {
      return element.createElement(editor.RichTextToolbarButton, {
        icon: 'admin-customizer',
        title: myEditorObj[1].title,
        onClick: function () {
          args.onChange(richText.toggleFormat(args.value, {
            type: `my-editor/${myEditorObj[1].item}`
          }));
        },
        isActive: args.isActive,
      })
    }
  })
}(
  window.wp.richText,
  window.wp.element,
  window.wp.editor,
))
