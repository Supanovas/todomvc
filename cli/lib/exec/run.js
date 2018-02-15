 const verify = require('../tasks/verify')
  
  const processRunOptions = (options = {}) => {
 +  debug('processing run options')
    const args = ['--run-project', options.project]
  
    //// if key is set use that - else attempt to find it by env var
    if (options.key == null) {
 +    debug('--key is not set, looking up environment variable CYPRESS_RECORD_KEY')
      options.key = process.env.CYPRESS_RECORD_KEY || process.env.CYPRESS_CI_KEY
    }
  
