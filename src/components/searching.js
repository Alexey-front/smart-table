import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
const compare = createComparison(['rules.skipEmptyTargetValues()'], [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)])
 
    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
         if (!action?.target || action.target.search === '' || action.target.search?.trim() === '') {
        return data;  // Возвращаем все данные без изменений
    }  
        else return data.filter(item => compare(item, action.target))
    }
}