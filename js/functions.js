$.getJSON('js/spell-data.json', function(spellData){
    var mainContent = $('main').html();
    mainContent = mainContent.replace(/:([A-Za-z]+):/g, function(match, spell) {
        if (spellData[spell]) {
            return `<a href='https://wowhead.com/spell=${spellData[spell]}' data-wh-icon-size="small">${spell}</a>`;
        }
    });
    $('main').html(mainContent);

    $('#mechanicsTabs').tabs();
    $('.first-tab').parent().addClass('ui-state-focus');

    var wowheadScript = document.createElement('script');
    wowheadScript.type = 'text/javascript';
    wowheadScript.src = 'https://wow.zamimg.com/js/tooltips.js';
    $('body').append(wowheadScript);
})
