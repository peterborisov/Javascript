function getArticleGenerator(articles) {
    let container = $('div#content');
    return () => {
        if (articles.length > 0) {
            container.append($('<article>')
                .text(articles.shift()));
        }
    }
}
