// License Key Formatting

// Given a string S that consists of only alphanumeric characters and dashes. 
// The string is separated into N + 1 groups by N dashes. Also given an integer K.
//  We want to reformat the string S, such that each group contains exactly K characters, 
// except for the first group, which could be shorter than K but still must contain at least one character. 
// Furthermore, a dash must be inserted between two groups, and you should convert all lowercase letters to uppercase.
// Examples:

// Input: S = “5F3Z-2e-9-w”, K = 4
// Output: “5F3Z-2E9W”
// Explanation: The string S has been split into two parts, each part has 4 characters.
// Note that two extra dashes are not needed and can be removed.

// Input: S = “2-5g-3-J”, K = 2
// Output: “2-5G-3J”

// Explanation: The string s has been split into three parts, each part has 2 characters except the first part, as it could be shorter as mentioned above

function reformatString(S, K) {
    if (!S || S.length === 0 || K <= 0) {
        return "";
    }

    const groups = S.replace(/^=+|-+$/g, "").split("-");

    let result = "";

    for( let i=0;i< groups.length; i++) {
        let group = groups[i].toUpperCase();

        if (group.length>K) {
            let chunks = [];

            for(let j=0; j<group.length; j+=K) {
                chunks.push(groups.substring(j,j+K));
            }
            group = chunks.join("-");
        }

        result += group;

        if(i<groups.length-1) {
            result += "-";
        }
    }

    const firstGroupLength = result.indexOf("-");
    const firstGroup = firstGroupLength === -1 ? result:result.substring(0,firstGroupLength);

    if(firstGroupLength === -1 && result.length > K) {
        let chunks = [];
        for (let j=0;j<result.length;j+=K) {
            chunks.push(result.substring(j,j+k))
        }
        result = chunks.join("-");
    } else if(firstGroupLength !==-1 && firstGroup.length === 0) {
        result = result.substring(result.indexOf("-")+1);
    }

    return result;
}

console.log(reformatString("5F3Z-2e-9-w"));
console.log(reformatString("2-5g-3-J"));