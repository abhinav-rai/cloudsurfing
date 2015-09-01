require 'dropbox_sdk'

client = DropboxClient.new(ENV['DROPBOX_AUTH_TOKEN'])
puts("Downloading Video File")
contents = client.get_file('/converted.mp4')
open('converted.mp4', 'w') {|f| f.puts contents}
