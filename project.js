let projects = [
    {
        title: "2D Space Scroller",
        languages: "JavaScript, HTML, CSS",
        description:
            "A space theme side scroller game. Avoid the meteroids and collect the diamonds.",
        link: "https://azaval9.github.io/IT202-Spring2021-project2/",
    },
    // {
    //     title: "Space Invaders",
    //     languages: "Unity, C#, JavaScript",
    //     description:
    //         "A space and medieval dungeon theme side scroller with multiple levels. Collect all the gems in each level to continue.",
    //     link: "",
    // },
    {
        title: "Informational CTA Website",
        languages: "C#, JavaScript, SQL, HTML, CSS",
        description:
            "Created several webpages to display information about each CTA train station’s information. An information CTA website that displays search information about handicap access, quantity of riders, and connected trains from SQL server. Produced a graph of total customers/riders for each station using SQL server and HTML.",
        link: "",
    },
];

projects.forEach((project) => {
    let card = document.querySelector(".mdc-card");
    let clone = card.cloneNode(true);

    //clone.querySelector(".mdc-card__content ");

    clone.querySelector(".mdc-card__content .card-title").innerText =
        project.title;

    clone.querySelectorAll(".mdc-card__content .card-text")[0].innerText =
        project.languages;

    clone.querySelectorAll(".mdc-card__content .card-text")[1].innerText =
        project.description;

    clone.querySelectorAll(".mdc-card__content .card-text")[1].innerText =
        project.description;

    clone.querySelector(
        ".mdc-card__actions .mdc-card__action-buttons .mdc-button.mdc-card__action.mdc-card__action--button .mdc-button__label a"
    ).href = project.link;
    document.querySelector("#divProjects").append(clone);
});
