document.querySelectorAll('pre').forEach(preBlock => {
    // Get the original text from the <pre> block and replace <br> tags with line breaks
    const originalText = preBlock.innerHTML.replace(/<br\s*\/?>/gi, '\n');

    // Create the main article content div structure
    const articleContentDiv = document.createElement('div');
    articleContentDiv.classList.add('article-content');

    // Create the title for the article content
    const title = document.createElement('h3');
    title.classList.add('article-content__title');
    title.textContent = "Содержание:";

    // Create the list to hold each line as an item
    const list = document.createElement('ul');
    list.classList.add('article-content-list');

    // Split the modified text into lines by newlines
    originalText.split(/\r?\n/).forEach(line => {
        const trimmedLine = line.trim();
        if (trimmedLine) { // Skip empty lines
            const listItem = document.createElement('li');
            listItem.classList.add('article-content-list__item');
            listItem.textContent = trimmedLine;
            list.appendChild(listItem);
        }
    });

    // Append title and list to the main article content div
    articleContentDiv.appendChild(title);
    articleContentDiv.appendChild(list);

    // Replace the <pre> block with the new article content structure
    preBlock.replaceWith(articleContentDiv);
});

document.querySelectorAll('code').forEach(codeBlock => {
    // Get the original text from the <code> block
    const originalText = codeBlock.textContent;

    // Create the main note div structure
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');

    // Create the note icon div
    const noteIconDiv = document.createElement('div');
    noteIconDiv.classList.add('note__icon');
    noteIconDiv.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 8H17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 13H13" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Заметки Labteller
    `;

    // Create the note text div and insert the original <code> text
    const noteTextDiv = document.createElement('div');
    noteTextDiv.classList.add('note__text');
    noteTextDiv.textContent = originalText;

    // Append icon and text to the main note div
    noteDiv.appendChild(noteIconDiv);
    noteDiv.appendChild(noteTextDiv);

    // Replace the <code> block with the new note div
    codeBlock.replaceWith(noteDiv);
});
