const SavedPenMiniature = ( {pen} ) => {

    const {title, author, html, css, js} = pen

    const preview = `<!DOCTYPE html>
    <html><head><style>
    *{
        transform: scale(.8) translateY(-3rem);
        overflow: clip;
    }
    ${css}
    </style>
    </head>
    <body>
    ${html}
    </body>
    <script>
    ${js}
    </script>
    </html>`

  return (
    <div className="saved-pen-min">
      <div>
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
        <iframe srcDoc={preview} frameBorder="0"></iframe>
    </div>
  )
}

export default SavedPenMiniature