console.log("Prompt Helper Loaded");

const btn = document.createElement("button");

btn.innerHTML = "✨";

btn.style.position = "fixed";
btn.style.top = "100px";
btn.style.right = "100px";
btn.style.width = "60px";
btn.style.height = "60px";
btn.style.zIndex = "999999999";
btn.style.background = "red";
btn.style.color = "white";

document.body.appendChild(btn);

btn.addEventListener("click", () => {

    const existing =
        document.getElementById("prompt-helper-modal");

    if (existing) {
        existing.remove();
    }

    const modal =
        document.createElement("div");

    modal.id = "prompt-helper-modal";

    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform =
        "translate(-50%, -50%)";

    modal.style.width = "700px";
    modal.style.height = "500px";

    modal.style.background = "white";
    modal.style.border = "2px solid red";

    modal.style.zIndex = "9999999999";

    modal.innerHTML = `
        <div
            id="editor"
            contenteditable="true"
            style="
              height:420px;
              padding:10px;
              outline:none;
              overflow:auto;

              background:white;
              color:black;

              font-size:16px;
              line-height:1.5;
            ">
        </div>
        <div style="
        padding:10px;
        border-bottom:1px solid #ccc;
        display:flex;
        justify-content:space-between;
        align-items:center;
        background:#f5f5f5;
    ">
        <span>Prompt Helper</span>

        <button id="close-btn">
            ✖
        </button>
    </div>

    <div style="
        padding:10px;
        border-bottom:1px solid #ddd;
        background:#fafafa;
    ">

        <button id="bold-btn">
            B
        </button>

        <button id="bullet-btn">
            •
        </button>

        <button id="highlight-btn">
            H
        </button>

    </div>

    <div
        id="editor"
        contenteditable="true"
        style="
            height:360px;
            padding:10px;

            background:white;
            color:black;

            outline:none;
            overflow:auto;
        ">
    </div>

    <div style="
        padding:10px;
        border-top:1px solid #ddd;
        text-align:right;
    ">

        <button id="insert-btn">
            Insert Into GPT
        </button>

    </div>

    `;

    document.body.appendChild(modal);

    document
        .getElementById("editor")
        .focus();

    document
    .getElementById("close-btn")
    .addEventListener("click", () => {

        modal.remove();
    });

document
    .getElementById("bold-btn")
    .addEventListener("click", () => {

        document.execCommand("bold");
    });

document
    .getElementById("bullet-btn")
    .addEventListener("click", () => {

        document.execCommand(
            "insertUnorderedList"
        );
    });

document
    .getElementById("highlight-btn")
    .addEventListener("click", () => {

        document.execCommand(
            "hiliteColor",
            false,
            "yellow"
        );
    });

});