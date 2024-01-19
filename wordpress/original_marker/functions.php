<?php
// ブロックエディターにマーカーボタンを追加
add_action('enqueue_block_editor_assets', function () {
  wp_enqueue_script('my_editor', get_theme_file_uri('func-js/editor.js'), [
    'wp-element',
    'wp-rich-text',
    'wp-editor',
  ]);
  wp_localize_script(
    'my_editor',
    'myEditorObj',
    [
      [
        'item' => 'editor01',
        'title' => 'marker（青）',
        'class' => 'marker-blue',
      ],
      [
        'item' => 'editor02',
        'title' => 'marker（赤）',
        'class' => 'marker-red',
      ]
    ]
  );
});
