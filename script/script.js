const Config = {
    name: "ctuffy",
    scale: 1,
    Links: [
        [
            "social",
            [
                ["reddit", "https://www.reddit.com/"],
                ["twitter", "https://twitter.com/home"],
                ["twitch", "https://www.twitch.tv/"]
            ]
        ],
        [
            "email",
            [
                ["gmail", "https://mail.google.com/mail/u/0/#inbox"],
                ["outlook", "https://outlook.office.com/mail/inbox"]
            ]
        ],
        [
            "code",
            [
                ["github", "https://github.com/"],
                ["devdocs", "https://devdocs.io/"],
                ["stack_overflow", "https://stackoverflow.com/"]
            ]
        ],
        [
            "school",
            [
                ["blackboard", "https://blackboard.jhu.edu/webapps/login/"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()