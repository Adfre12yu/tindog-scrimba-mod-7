class Dog {
    constructor(data) {
        Object.assign(this, data);
    }

    getDogHtml() {
        return `<img src="${this.avatar}" alt="" class="main-img">
                <div class="desc">
                  <h1>${this.name}, ${this.age}</h1>
                  <h2>${this.bio}</h2>
                </div>`;
    }

    swiped(liked) {
        return liked
            ? `<img src="images/badge-like.png" alt="" class="badge">`
            : `<img src="images/badge-nope.png" alt="" class="badge">`;
    }
}

export default Dog;
