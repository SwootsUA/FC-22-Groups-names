'use strict';

/**
 * Validates group name and returns true or false, always false if input is not a string
 * @param {string} groupName
 * @returns {boolean}
 */
function isValidGroupName(groupName) {
    if (typeof groupName !== 'string') return false;
    return groupName.match(/(fd|fm|fe|FD|FM|FE)20\d{2}(-\d+)?$/g);
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

for (const groupName of arrGroups) {
    console.log(
        `${isValidGroupName(groupName) ? 'Success' : 'Error'} ${groupName}`
    );
}
