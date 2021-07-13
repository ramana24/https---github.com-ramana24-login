sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ux/elementapp/test/integration/pages/MainListReport' ,
        'ux/elementapp/test/integration/pages/MainObjectPage',
        'ux/elementapp/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ux/elementapp') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);