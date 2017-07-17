'use strict';

/**
 * The DavisWeather class is the core of the plugin and an
 * instance of DavisWeather is what will be loaded into Davis
 */
class Performopen {

  /**
   * The main body of work is done in the constructor.
   */
  constructor(davis, options) {
    this.davis = davis;
    this.options = options;

    // This is where we declare our intents.
    this.intents = {
      // Our intent name
      performopen: {
        // A basic description of the intent
        usage: 'End the show',

        // Phrases that will trigger our intent. Note that they will not
        // need to be matched exactly in order for the intent to run.
        phrases: [
          'and please welcome everyone to perform sydney',
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
      'performopen:gatherData': (exchange, context) => null,
      'performopen:respond': (exchange, context) => {
        const resp = 'Hey dave, and hi everyone. Wow it is amazing to see so many people hear today. We have some fantastic presenters from red hat, pivotal, cpt, service now and dhs, as well as dynatrace speakers in Alois and Rafi. Oh and then I guess you are speaking again.';

      //  var linkUrl = "https://jnc47888.live.dynatrace.com/#install/agentlinux";
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
module.exports = Performopen;
