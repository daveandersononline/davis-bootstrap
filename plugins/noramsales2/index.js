'use strict';

/**
 * The DavisWeather class is the core of the plugin and an
 * instance of DavisWeather is what will be loaded into Davis
 */
class Noramsales2 {

  /**
   * The main body of work is done in the constructor.
   */
  constructor(davis, options) {
    this.davis = davis;
    this.options = options;

    // This is where we declare our intents.
    this.intents = {
      // Our intent name
      noramsales2: {
        // A basic description of the intent
        usage: 'End the show',

        // Phrases that will trigger our intent. Note that they will not
        // need to be matched exactly in order for the intent to run.
        phrases: [
          'that does not really help me, any other ideas?',
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
      'noramsales2:gatherData': (exchange, context) => null,
      'noramsales2:respond': (exchange, context) => {
        const resp = 'They have short attention spans so I would suggest keeping it very simple for them. They like t shirts and beer. Start with that. Then tell them about all the amazing work you are doing..........which they will forget. So just end with t shirts and beer and you will have done well.';

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
module.exports = Noramsales2;
