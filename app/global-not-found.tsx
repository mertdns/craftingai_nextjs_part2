import "./globals.css"

export default function NotFound() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body className="bg-gradient-to-r from-slate-900 to-slate-700 h-full">
        <section className="flex items-center justify-center h-full">
          <h2 className="mx-auto text-2xl font-bold sm:text-4xl md:text-5xl truncate bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">Bu Sayfa bulunamadı</h2>
        </section>
      </body>
    </html>
  )
}