'use strict';

/**
 * Validates group name and logs result
 * @param {string[]} groupName - Array of groups names to be tested
 */
function validateGroupNames(groupNames) {
    for (const name of groupNames) {
        console.log(`${/^(fd|fm|fe|FD|FM|FE)20\d{2}(-\d+)?$/.test(name) ? 'Success' : 'Error'} ${name}`);
    }
}

const arrGroups = [
    'FE2021-5',
    'Fe2020-2',
    'FD2021',
    'fD2022-1',
    'FE2020-3',
    'FD2020/2',
    'fe2021-3',
    'FD2020$5',
    'FE2008-52',
    'Fm2008-23',
    'FM2022-1',
];

validateGroupNames(arrGroups);
