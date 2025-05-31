window.addEventListener('load', function() {

    $.getJSON('js/spell-data.json', function(spellData){
        var bodyContent = $('body').html();
        bodyContent = bodyContent.replace(/:([A-Za-z]+):/g, function(match, spell) {
            if (spellData[spell]) {
                return `<a href='https://wowhead.com/spell=${spellData[spell]}' data-wh-icon-size="small">${spell}</a>`;
            }
        });
        $('body').html(bodyContent);
    })

});