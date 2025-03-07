    const core = require('@actions/core');

    try {
      const inputValue = core.getInput('input_value');
      console.log(`Input value: ${inputValue}`);

      core.setOutput('output_value', inputValue);
    } catch (error) {
      core.setFailed(error.message);
    }
