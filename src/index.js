import m from 'mithril';

let Main = {
    view: function() {
        return (
            <section>
                <h1>Welcome to mithril setup,  transpire by  babel, bundle with webpack!</h1>
            </section>
        )
    }
}

m.render(document.body, <Main />);