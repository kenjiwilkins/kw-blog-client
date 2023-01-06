function setTitle(title: string, postFix = "KW Blog") {
  document.title = `${title} - ${postFix}`;
}

export { setTitle };
