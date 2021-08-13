const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'tests/*test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      waitForTimeout: 10000,
      show: true,
      browser: 'chromium',
      waitForNavigation: "networkidle0"
    },
    SetupBlocks: {
      require: './tests/helpers/base.helper.js'
	}
  },
  include: {
    I: './steps_file.js',
	CommonConstants: './tests/constants/common.constants.js',
    HomePage: './tests/pages/home.page.js',
	HomeConstants: './tests/constants/home.constants.js',
	SearchPage: './tests/pages/search.page.js',
	SearchConstants: './tests/constants/search.constants.js',
	LiveStreamPage: './tests/pages/livestream.page.js',
	LiveStreamConstants: './tests/constants/livestream.constants.js'
  },
  gherkin: {
    features: './tests/features/*.feature',
    steps: './tests/steps/*.steps.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs_oranum_bdd_tests',
  plugins: {
	  allure: {
		  enabled: true,
		  outputDir: "./allureResults"
	  },
	  pauseOnFail: {
		  enabled: false
	  },
	  retryFailedStep: {
		  enabled: true
	  },
	  tryTo: {
		  enabled: true
      },
	  screenshotOnFail: {
		  enabled: true
      }
  },
  multiple: {
    chromium: {
      "browsers": ["chromium"]
    },
    firefox: {
      "browsers": ["firefox"]
    },
    electron: {
      "browsers": ["electron"]
    },
    webkit: {
      "browsers": ["webkit"]
    },
    parallel: {
      "chunks": 1,
      "browsers": ["chromium", "firefox", "webkit"]
    }
  }
}