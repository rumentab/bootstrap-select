/*
 * Translated default messages for bootstrap-select.
 * Locale: BG (Bulgaria)
 * Region: BG (Bulgaria)
 */
(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Нищо избрано',
    noneResultsText: 'Няма резултат за {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} избран елемент" : "{0} избрани елемента";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Лимитът е достигнат ({n} елемент максимум)' : 'Лимитът е достигнат ({n} елемента максимум)',
        (numGroup == 1) ? 'Груповият лимит е достигнат ({n} елемент максимум)' : 'Груповият лимит е достигнат ({n} елемента максимум)'
      ];
    },
    selectAllText: 'Избери всички',
    deselectAllText: 'Размаркирай всички',
    multipleSeparator: ', '
  };
})(jQuery);
