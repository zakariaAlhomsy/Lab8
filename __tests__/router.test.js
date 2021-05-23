/**
 * @jest-environment jsdom
 */

 import { TestScheduler } from '@jest/core';
import { pushToHistory } from '../scripts/router.js';


 describe('settings branch', () => {
     test('length of history', () => {
         let settingsLength = history.length;
        let settings = pushToHistory("settings",0);
       expect(settings.length).toEqual(settingsLength+1);
     })

     test('state of settings', () =>{
        let history = pushToHistory("settings");
       expect(history.state).toEqual({page: "settings"});
     });
 });

 describe('entry branch', () => {
    test('length of entry', () => {
        let entryLength = history.length;
       let entry = pushToHistory("entry",1);
       expect(history.length).toEqual(entryLength + 1);
    });

    test('state of entry', () =>{
        let entry = pushToHistory("entry",0);
       expect(history.state).toEqual({page: "entry0"});
    });
});

describe('default branch', () => {
    test('length of history', () => {
        let defaultLength = history.length;
        let defaultObj = pushToHistory("default",null);
        expect(defaultObj.length).toEqual(defaultLength+1);
    });

    test('state of history', () => {
        let defaultObj = pushToHistory({},null);
        expect(defaultObj.state).toEqual({});
    });
});