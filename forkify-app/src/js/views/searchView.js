class SearchView {
  _parentElement = document.querySelector('.search');

  getQuery() {
    // Get the query string
    const query = this._parentElement.querySelector('.search__field').value;

    // Clear the query string
    this._clearInput();

    // Return the query string
    return query;
  }
  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }
  addHandlerRender(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
