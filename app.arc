@app
crossword

@http
get /api
post /api

@tables
foo
  foo *String

data
  scopeID *String
  dataID **String
  ttl TTL
