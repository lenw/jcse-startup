subdir = File.dirname(__FILE__) + '/list'
require "#{subdir}/config/environment"

use Rails::Rack::LogTailer
use Rails::Rack::Static
run ActionController::Dispatcher.new
