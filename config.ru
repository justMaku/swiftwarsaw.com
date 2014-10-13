use Rack::Static,
  :urls => ["/img", "/js", "/css"],
  :root => "public"

run lambda { |env|
  `compass compile public`
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
