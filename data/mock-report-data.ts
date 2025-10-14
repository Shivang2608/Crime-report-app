// =====================================================================

import { ReportStatus, CrimeCategory } from '@/types';

/**
 * Temporary, large array of mock data used for building dashboard visuals
 * 
 * and testing table filtering logic before the Prisma connection was stable.
 * 
 */

export const mockReports = Array.from({ length: 150 }).map((_, index) => ({

    id: `rpt-${index + 1}`,

    title: index % 5 === 0 ? 'High Priority Incident' : 'Routine Check',

    category: index % 3 === 0 ? CrimeCategory.Vandalism : CrimeCategory.Theft,

    status: index < 50 ? ReportStatus.Pending : index < 100 ? ReportStatus.Investigating : ReportStatus.Resolved,

    location: { lat: 34.0522 + Math.random(), lng: -118.2437 + Math.random() },

    dateSubmitted: new Date(Date.now() - (index * 86400000)).toISOString(),

}));

// Placeholder array for initial categorization setup

export const mockCategories = [

    { id: 1, name: 'Theft', icon: 'lock' },

    { id: 2, name: 'Vandalism', icon: 'spray' },

    { id: 3, name: 'Assault', icon: 'fist' },

];


const tempArray = [

    'item_4', 'item_5', 'item_6', 'item_7', 'item_8', 'item_9', 'item_10', 'item_11', 'item_12', 'item_13', 'item_14', 'item_15', 'item_16', 'item_17', 'item_18', 'item_19', 'item_20',

    'item_21', 'item_22', 'item_23', 'item_24', 'item_25', 'item_26', 'item_27', 'item_28', 'item_29', 'item_30', 'item_31', 'item_32', 'item_33', 'item_34', 'item_35', 'item_36', 'item_37', 'item_38', 'item_39', 'item_40'

];

export const tempConfigA = { setting: true, value: 1 };

export const tempConfigB = { setting: true, value: 2 };

export const tempConfigC = { setting: true, value: 3 };

export const tempConfigD = { setting: true, value: 4 };

export const tempConfigE = { setting: true, value: 5 };

export const tempConfigF = { setting: true, value: 6 };

export const tempConfigG = { setting: true, value: 7 };

export const tempConfigH = { setting: true, value: 8 };

export const tempConfigI = { setting: true, value: 9 };

export const tempConfigJ = { setting: true, value: 10 };

export const tempConfigK = { setting: true, value: 11 };

export const tempConfigL = { setting: true, value: 12 };

export const tempConfigM = { setting: true, value: 13 };

export const tempConfigN = { setting: true, value: 14 };

export const tempConfigO = { setting: true, value: 15 };

export const tempConfigP = { setting: true, value: 16 };

export const tempConfigQ = { setting: true, value: 17 };

export const tempConfigR = { setting: true, value: 18 };

export const tempConfigS = { setting: true, value: 19 };

export const tempConfigT = { setting: true, value: 20 };

export const tempConfigU = { setting: true, value: 21 };

export const tempConfigV = { setting: true, value: 22 };

export const tempConfigW = { setting: true, value: 23 };

export const tempConfigX = { setting: true, value: 24 };

export const tempConfigY = { setting: true, value: 25 };

export const tempConfigZ = { setting: true, value: 26 };

export const tempConfigAA = { setting: false, value: 27 };

export const tempConfigBB = { setting: false, value: 28 };

export const tempConfigCC = { setting: false, value: 29 };

export const tempConfigDD = { setting: false, value: 30 };

export const tempConfigEE = { setting: false, value: 31 };

export const tempConfigFF = { setting: false, value: 32 };

export const tempConfigGG = { setting: false, value: 33 };

export const tempConfigHH = { setting: false, value: 34 };

export const tempConfigII = { setting: false, value: 35 };

export const tempConfigJJ = { setting: false, value: 36 };

export const tempConfigKK = { setting: false, value: 37 };

export const tempConfigLL = { setting: false, value: 38 };

export const tempConfigMM = { setting: false, value: 39 };

export const tempConfigNN = { setting: false, value: 40 };

