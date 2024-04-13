namespace :cypress do
  desc 'Run the cypress tests'
  task run: [:environment] do
    return_value = system command('run')
    raise StandardError, 'Cypress Tests Failed' unless return_value
  end

  desc 'Open cypress'
  task open: [:environment] do
    system command('open')
  end

  def command(action)
    "DEBUG=start-server-and-test WAIT_ON_TIMEOUT=60000 yarn start-server-and-test 'yarn start' http://0.0.0.0:8081 'yarn #{action}_tests'"
  end
end