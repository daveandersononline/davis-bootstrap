'use strict';

/**
 * The DavisWeather class is the core of the plugin and an
 * instance of DavisWeather is what will be loaded into Davis
 */
class Noramsales {

  /**
   * The main body of work is done in the constructor.
   */
  constructor(davis, options) {
    this.davis = davis;
    this.options = options;

    // This is where we declare our intents.
    this.intents = {
      // Our intent name
      noramsales: {
        // A basic description of the intent
        usage: 'End the show',

        // Phrases that will trigger our intent. Note that they will not
        // need to be matched exactly in order for the intent to run.
        phrases: [
          'what should I be focusing on today?',
        ],

        // Lifecycle Events are friendly names for the steps that an intent
        // needs to take in order to run successfully. For instance, our intent
        // will need to gather data from the weather underground API, then will
        // need to respond to the user, so I have broken it up into those events.
        lifecycleEvents: [
          'gatherData',
          'respond',
        ],
      },
    };

    // Hooks give intents functionality.
    // They are called serially when an intent is run.
    // They are named using the 'intentName:lifecycleEvent'
    // Each hook is called with 2 arguments: the exchange object,
    // and a context object. The exchange object is the primary
    // interface between Davis, a user, and a plugin. The context
    // object holds any state carried over from previous exchanges.
    this.hooks = {
      'noramsales:gatherData': (exchange, context) => null,
      'noramsales:respond': (exchange, context) => {
        const resp = 'That is a tough one Dave. Sales are brutal. You are an amazing marketer but even if you had artificial intelligence like me, I do not think you would please them. Between you and me, they are not the sharpest applications in the app store.';

       // var linkUrl = "https://analytics.google.com/analytics/web/?authuser=1#embed/report-home/a54510554w87453075p90791076/";
	    // this.davis.server.pushLinkToUser(exchange.user, linkUrl, true);
        
        exchange
          .response(resp) // respond to the user  
          .smartEnd() // end the conversation if appropriate
          .skipFollowUp();
      },
    };
  }
}

// export the plugin so it can be used
module.exports = Noramsales;
