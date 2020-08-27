(function($) {
    /**
     * EnupalStripeSettings class
     */
    var EnupalStripeSettings = Garnish.Base.extend({

        $testModeToggle: null,
        $testModeToggleField: null,

        /**
         * The constructor.
         */
        init: function() {
            // init method
            this.$testModeToggleField = $("#settings-testMode-field");
            this.$testModeToggle = $("input[name='settings[testMode]']");

            this.addListener(this.$testModeToggleField, 'change', 'handleTestModeToggle');

            this.handleTestModeToggle();
        },

        handleTestModeToggle: function()
        {
            var value = this.$testModeToggle.val();
            var testWrapper = $("#settings-testKeys");
            var liveWrapper = $("#settings-liveKeys");

            if (value == 1){
                testWrapper.removeClass('hidden');
                liveWrapper.addClass('hidden');
            }
            else{
                testWrapper.addClass('hidden');
                liveWrapper.removeClass('hidden');
            }
        },
    });

    window.EnupalStripeSettings = EnupalStripeSettings;

})(jQuery);