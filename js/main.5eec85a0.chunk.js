(this.webpackJsonpyam = this.webpackJsonpyam || []).push([
    [1], {
        127: function (e, n, t) {
            var a = {
                "./category-ada.png": 512,
                "./category-bake.png": 513,
                "./category-band.png": 514,
                "./category-burger.png": 515,
                "./category-busd.png": 516,
                "./category-cake.png": 517,
                "./category-dot.png": 518,
                "./category-eos.png": 519,
                "./category-link.png": 520
            };

            function r(e) {
                var n = i(e);
                return t(n)
            }

            function i(e) {
                if (!t.o(a, e)) {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return a[e]
            }
            r.keys = function () {
                return Object.keys(a)
            }, r.resolve = i, e.exports = r, r.id = 127
        },
        129: function (e, n, t) {
            e.exports = t.p + "static/media/cakecat.cb24d368.png"
        },
        218: function (e, n, t) {
            e.exports = t.p + "static/media/metamask-fox.c06f3a3e.svg"
        },
        219: function (e, n, t) {
            e.exports = t.p + "static/media/wallet-connect.37f2bc6e.svg"
        },
        220: function (e, n, t) {
            e.exports = t.p + "static/media/trustwallet.eebf3ae2.svg"
        },
        221: function (e, n, t) {
            e.exports = t.p + "static/media/tokenpocket.4a822a0c.svg"
        },
        222: function (e) {
            e.exports = JSON.parse('{"abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"networks":{}}')
        },
        223: function (e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
        },
        224: function (e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract CakeToken","name":"_cake","type":"address"},{"internalType":"contract SyrupBar","name":"_syrup","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"uint256","name":"_cakePerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cake","outputs":[{"internalType":"contract CakeToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"enterStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"leaveStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrator","outputs":[{"internalType":"contract IMigratorChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingCake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCakePerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMigratorChef","name":"_migrator","type":"address"}],"name":"setMigrator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract SyrupBar","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        225: function (e) {
            e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        226: function (e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract CakeToken","name":"_cake","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cake","outputs":[{"internalType":"contract CakeToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"safeCakeTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        227: function (e) {
            e.exports = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
        },
        228: function (e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')
        },
        229: function (e, n, t) {
            e.exports = t.p + "static/media/chef2.63985e0c.png"
        },
        236: function (e, n, t) {
            e.exports = t(523)
        },
        257: function (e, n) {},
        265: function (e, n) {},
        281: function (e, n) {},
        283: function (e, n) {},
        297: function (e, n) {},
        299: function (e, n) {},
        446: function (e, n) {},
        456: function (e, n) {},
        459: function (e, n) {},
        512: function (e, n, t) {
            e.exports = t.p + "static/media/category-ada.3ea3f1f9.png"
        },
        513: function (e, n, t) {
            e.exports = t.p + "static/media/category-bake.5a4b191e.png"
        },
        514: function (e, n, t) {
            e.exports = t.p + "static/media/category-band.97872ed1.png"
        },
        515: function (e, n, t) {
            e.exports = t.p + "static/media/category-burger.30ebfdc1.png"
        },
        516: function (e, n, t) {
            e.exports = t.p + "static/media/category-busd.79cbde67.png"
        },
        517: function (e, n, t) {
            e.exports = t.p + "static/media/category-cake.fee883c3.png"
        },
        518: function (e, n, t) {
            e.exports = t.p + "static/media/category-dot.44395002.png"
        },
        519: function (e, n, t) {
            e.exports = t.p + "static/media/category-eos.a0de0779.png"
        },
        520: function (e, n, t) {
            e.exports = t.p + "static/media/category-link.d9b7a087.png"
        },
        521: function (e, n, t) {
            e.exports = t.p + "static/media/BG1.bfd323f2.png"
        },
        522: function (e, n, t) {},
        523: function (e, n, t) {
            "use strict";
            t.r(n);
            var a = t(0),
                r = t.n(a),
                i = t(214),
                c = t.n(i),
                u = t(5),
                o = t(24),
                s = t(22),
                l = t(1),
                p = t(525),
                d = t(2);

            function m() {
                var e = Object(d.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ", "px;\n  padding: 0 ", "px;\n  text-decoration: none;\n"]);
                return m = function () {
                    return e
                }, e
            }

            function f() {
                var e = Object(d.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ", "px;\n  padding: 0 ", "px;\n  text-decoration: none;\n"]);
                return f = function () {
                    return e
                }, e
            }

            function y() {
                var e = Object(d.a)(["\n  align-items: center;\n  background: ", ";\n  border: 0;\n  border-radius: 12px;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  font-size: ", "px;\n  font-weight: 700;\n  height: ", "px;\n  justify-content: center;\n  outline: none;\n  padding-left: ", "px;\n  padding-right: ", "px;\n  pointer-events: ", ";\n  width: 100%;\n  &:hover {\n    background-color: ", ";\n  }\n"]);
                return y = function () {
                    return e
                }, e
            }
            var b = l.c.button(y(), (function (e) {
                    return e.disabled ? "#ddd" : "linear-gradient(180deg, #54DADE 0%, #24C7D6 76.22%)"
                }), (function (e) {
                    return e.disabled ? "".concat(e.color, "55") : e.color
                }), (function (e) {
                    return e.fontSize
                }), (function (e) {
                    return e.size
                }), (function (e) {
                    return e.padding
                }), (function (e) {
                    return e.padding
                }), (function (e) {
                    return e.disabled ? "none" : void 0
                }), (function (e) {
                    return e.theme.color.grey[100]
                })),
                h = Object(l.c)(o.b)(f(), (function (e) {
                    return -e.theme.spacing[4]
                }), (function (e) {
                    return e.theme.spacing[4]
                })),
                x = l.c.a(m(), (function (e) {
                    return -e.theme.spacing[4]
                }), (function (e) {
                    return e.theme.spacing[4]
                })),
                v = function (e) {
                    var n, t, i, c, u = e.children,
                        o = e.disabled,
                        s = e.href,
                        p = e.onClick,
                        d = e.size,
                        m = e.text,
                        f = e.to,
                        y = e.variant,
                        v = Object(a.useContext)(l.a),
                        g = (v.color, v.spacing);
                    switch (y) {
                        case "secondary":
                            n = "#fff";
                            break;
                        case "default":
                            n = "#fff";
                        default:
                            n = "#fff"
                    }
                    switch (d) {
                        case "sm":
                            i = g[3], t = 36, c = 14;
                            break;
                        case "lg":
                            i = g[4], t = 72, c = 16;
                            break;
                        case "md":
                        default:
                            i = g[4], t = 56, c = 16
                    }
                    var E = Object(a.useMemo)((function () {
                        return f ? r.a.createElement(h, {
                            to: f
                        }, m) : s ? r.a.createElement(x, {
                            href: s,
                            target: "__blank"
                        }, m) : m
                    }), [s, m, f]);
                    return r.a.createElement(b, {
                        boxShadow: void 0,
                        color: n,
                        disabled: o,
                        fontSize: c,
                        onClick: p,
                        padding: i,
                        size: t
                    }, u, E)
                };

            function g() {
                var e = Object(d.a)(["\n  background-color: ", ";\n  font-size: 56px;\n  height: 80px;\n  width: 150px;\n  border-radius: 40px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin: 0 auto ", "px;\n  img {\n    height: 150px;\n    width: 150px;\n  }\n"]);
                return g = function () {
                    return e
                }, e
            }
            var E = l.c.div(g(), (function (e) {
                    return e.theme.color.grey[300]
                }), (function (e) {
                    return e.theme.spacing[3]
                })),
                w = function (e) {
                    var n = e.children;
                    return r.a.createElement(E, null, n)
                };

            function O() {
                var e = Object(d.a)([""]);
                return O = function () {
                    return e
                }, e
            }

            function j() {
                var e = Object(d.a)(["\n  padding: 0 20px;\n  background: ", ";\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n  min-height: 0;\n"]);
                return j = function () {
                    return e
                }, e
            }

            function k() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  position: relative;\n  width: 100%;\n  max-width: 512px;\n  @media (max-width: ", "px) {\n    flex: 1;\n    position: absolute;\n    top: 100%;\n    right: 0;\n    left: 0;\n    max-height: calc(100% - ", "px);\n    animation: ", " 0.3s forwards ease-out;\n  }\n"]);
                return k = function () {
                    return e
                }, e
            }

            function T() {
                var e = Object(d.a)(["\n  0% {\n    transform: translateY(0%);\n  }\n  100% {\n    transform: translateY(-100%);\n  }\n"]);
                return T = function () {
                    return e
                }, e
            }
            var C = Object(l.d)(T()),
                B = l.c.div(k(), (function (e) {
                    return e.theme.breakpoints.mobile
                }), (function (e) {
                    return e.theme.spacing[4]
                }), C),
                A = l.c.div(j(), (function (e) {
                    return e.theme.color.grey[300]
                })),
                S = (l.c.div(O()), function (e) {
                    var n = e.children;
                    return r.a.createElement(B, null, r.a.createElement(A, null, n))
                });

            function M() {
                var e = Object(d.a)(["\n  height: ", "px;\n  width: ", "px;\n"]);
                return M = function () {
                    return e
                }, e
            }
            var D = l.c.div(M(), (function (e) {
                    return e.size
                }), (function (e) {
                    return e.size
                })),
                F = function (e) {
                    var n, t = e.size,
                        i = void 0 === t ? "md" : t,
                        c = Object(a.useContext)(l.a).spacing;
                    switch (i) {
                        case "lg":
                            n = c[6];
                            break;
                        case "sm":
                            n = c[2];
                            break;
                        case "md":
                        default:
                            n = c[4]
                    }
                    return r.a.createElement(D, {
                        size: n
                    })
                };

            function N() {
                var e = Object(d.a)(["\n  flex: 1;\n"]);
                return N = function () {
                    return e
                }, e
            }

            function _() {
                var e = Object(d.a)(["\n  align-items: center;\n  background-color: ", "00;\n  display: flex;\n  margin: 0;\n  padding: ", "px;\n"]);
                return _ = function () {
                    return e
                }, e
            }
            var I = l.c.div(_(), (function (e) {
                    return e.theme.color.grey[100]
                }), (function (e) {
                    return e.theme.spacing[4]
                })),
                P = l.c.div(N()),
                z = function (e) {
                    var n = e.children,
                        t = r.a.Children.toArray(n).length;
                    return r.a.createElement(I, null, r.a.Children.map(n, (function (e, n) {
                        return r.a.createElement(r.a.Fragment, null, r.a.createElement(P, null, e), n < t - 1 && r.a.createElement(F, null))
                    })))
                };

            function L() {
                var e = Object(d.a)(["\n  padding: ", "px;\n  @media (max-width: ", "px) {\n    flex: 1;\n    overflow: auto;\n  }\n"]);
                return L = function () {
                    return e
                }, e
            }
            var R = l.c.div(L(), (function (e) {
                    return e.theme.spacing[4]
                }), (function (e) {
                    return e.theme.breakpoints.mobile
                })),
                K = function (e) {
                    var n = e.children;
                    return r.a.createElement(R, null, n)
                };

            function U() {
                var e = Object(d.a)(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  font-size: 18px;\n  font-weight: 700;\n  height: ", "px;\n  justify-content: center;\n"]);
                return U = function () {
                    return e
                }, e
            }
            var G = l.c.div(U(), (function (e) {
                    return e.theme.color.grey[600]
                }), (function (e) {
                    return e.theme.topBarSize
                })),
                H = function (e) {
                    var n = e.text;
                    return r.a.createElement(G, null, n)
                },
                W = function (e) {
                    var n = e.onConfirm,
                        t = e.onDismiss,
                        i = Object(a.useState)("disclaimer"),
                        c = Object(u.a)(i, 2),
                        o = c[0],
                        s = c[1],
                        l = Object(a.useCallback)((function () {
                            n(), t()
                        }), [n, t]),
                        p = Object(a.useMemo)((function () {
                            return "disclaimer" === o ? r.a.createElement("div", null, r.a.createElement("p", null, "Audits: None."), r.a.createElement("p", null, "While the initial creators of the Sushi protocol have made reasonable efforts to attempt to ensure the security of the contracts, including forking much of the codebase from existing well-audited projects and soliciting review from friends, nothing approaching the rigor of a formal audit has been conducted at this time."), r.a.createElement("p", null, "We STRONGLY urge caution to anyone who chooses to engage with these contracts.")) : r.a.createElement("div", null, r.a.createElement("p", null, "Attention MEOW Uniswap LPs"), r.a.createElement("p", null, "The only Uniswap pool that is compatible with MEOW is MEOW/yCRV (Curve yPool tokens)"), r.a.createElement("p", null, "Providing liquidity for other Uniswap pools is dangerous"), r.a.createElement("p", null, "You will LOSE your share of rebases"))
                        }), [o]),
                        d = Object(a.useMemo)((function () {
                            return "disclaimer" === o ? r.a.createElement(v, {
                                text: "Next",
                                variant: "secondary",
                                onClick: function () {
                                    return s("uniswap")
                                }
                            }) : r.a.createElement(v, {
                                text: "I understand",
                                onClick: l
                            })
                        }), [s, o, l]);
                    return r.a.createElement(S, null, r.a.createElement(H, {
                        text: "Warning"
                    }), r.a.createElement(w, null, "\u26a0\ufe0f"), r.a.createElement(K, null, p), r.a.createElement(z, null, d))
                };

            function V() {
                var e = Object(d.a)(["\n  background-color: ", "aa;\n  position: absolute;\n  top: 0; right: 0; bottom: 0; left: 0;\n"]);
                return V = function () {
                    return e
                }, e
            }

            function X() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: fixed;\n  top: 0; right: 0; bottom: 0; left: 0;\n"]);
                return X = function () {
                    return e
                }, e
            }
            var J = Object(a.createContext)({
                    onPresent: function () {},
                    onDismiss: function () {}
                }),
                Y = l.c.div(X()),
                q = l.c.div(V(), (function (e) {
                    return e.theme.color.grey[600]
                })),
                $ = function (e) {
                    var n = e.children,
                        t = Object(a.useState)(!1),
                        i = Object(u.a)(t, 2),
                        c = i[0],
                        o = i[1],
                        s = Object(a.useState)(),
                        l = Object(u.a)(s, 2),
                        p = l[0],
                        d = l[1],
                        m = Object(a.useState)(),
                        f = Object(u.a)(m, 2),
                        y = f[0],
                        b = f[1],
                        h = Object(a.useCallback)((function (e, n) {
                            b(n), d(e), o(!0)
                        }), [d, o, b]),
                        x = Object(a.useCallback)((function () {
                            d(void 0), o(!1)
                        }), [d, o, y]);
                    return r.a.createElement(J.Provider, {
                        value: {
                            content: p,
                            isOpen: c,
                            onPresent: h,
                            onDismiss: x
                        }
                    }, n, c && r.a.createElement(Y, null, r.a.createElement(q, {
                        onClick: x
                    }), r.a.isValidElement(p) && r.a.cloneElement(p, {
                        onDismiss: x
                    })))
                },
                Q = function (e, n) {
                    var t = Object(a.useContext)(J),
                        r = t.onDismiss,
                        i = t.onPresent;
                    return [Object(a.useCallback)((function () {
                        i(e, n)
                    }), [n, e, i]), r]
                },
                Z = t(218),
                ee = t.n(Z),
                ne = t(219),
                te = t.n(ne),
                ae = t(220),
                re = t.n(ae),
                ie = t(221),
                ce = t.n(ie);

            function ue() {
                var e = Object(d.a)(["\n  background: #FFFDFA;\n  border-radius: 20px;\n  display: flex;\n  color: #B9C9BC;\n  flex: 1;\n  box-shadow: 0px 2px 8px rgba(171, 133, 115, 0.21);\n  border-radius: 20px;\n  flex-direction: column;\n"]);
                return ue = function () {
                    return e
                }, e
            }
            var oe = l.c.div(ue()),
                se = function (e) {
                    var n = e.children;
                    return r.a.createElement(oe, null, n)
                };

            function le() {
                var e = Object(d.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: ", "px;\n\n"]);
                return le = function () {
                    return e
                }, e
            }
            var pe = l.c.div(le(), (function (e) {
                    return e.theme.spacing[3]
                })),
                de = function (e) {
                    var n = e.children;
                    return r.a.createElement(pe, null, n)
                };

            function me() {
                var e = Object(d.a)(["\n  color: ", ";\n  font-size: 18px;\n  font-weight: 700;\n  padding: ", "px;\n  text-align: center;\n"]);
                return me = function () {
                    return e
                }, e
            }
            var fe = l.c.div(me(), (function (e) {
                    return e.theme.color.blue[600]
                }), (function (e) {
                    return e.theme.spacing[4]
                })),
                ye = function (e) {
                    var n = e.text;
                    return r.a.createElement(fe, null, n)
                },
                be = function (e) {
                    var n = e.icon,
                        t = e.onConnect,
                        a = e.title;
                    return r.a.createElement(se, null, r.a.createElement(de, null, r.a.createElement(w, null, n), r.a.createElement(ye, {
                        text: a
                    }), r.a.createElement(F, null), r.a.createElement(v, {
                        onClick: t,
                        text: "Connect"
                    })))
                };

            function he() {
                var e = Object(d.a)(["\n  flex-basis: calc(50% - ", "px);\n  padding-bottom: 0.2em;\n  padding-top: 0.2em;\n"]);
                return he = function () {
                    return e
                }, e
            }

            function xe() {
                var e = Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  @media (max-width: ", "px) {\n    flex-direction: column;\n    flex-wrap: none;\n  }\n"]);
                return xe = function () {
                    return e
                }, e
            }
            var ve = l.c.div(xe(), (function (e) {
                    return e.theme.breakpoints.mobile
                })),
                ge = l.c.div(he(), (function (e) {
                    return e.theme.spacing[2]
                })),
                Ee = function (e) {
                    var n = e.onDismiss,
                        t = Object(p.h)(),
                        i = t.account,
                        c = t.connect;
                    t.status;
                    return Object(a.useEffect)((function () {
                        i && n()
                    }), [i, n]), r.a.createElement(S, null, r.a.createElement(H, {
                        text: "Select a wallet provider."
                    }), r.a.createElement(K, null, r.a.createElement(ve, null, r.a.createElement(ge, null, r.a.createElement(be, {
                        icon: r.a.createElement("img", {
                            src: ee.a,
                            style: {
                                height: 52
                            }
                        }),
                        onConnect: function () {
                            c("injected"), window.localStorage.setItem("accountStatus", "1")
                        },
                        title: "Metamask"
                    })), r.a.createElement(F, {
                        size: "sm"
                    }), r.a.createElement(ge, null, r.a.createElement(be, {
                        icon: r.a.createElement("img", {
                            src: re.a,
                            style: {
                                height: 52
                            }
                        }),
                        onConnect: function () {
                            c("injected"), window.localStorage.setItem("accountStatus", "1")
                        },
                        title: "Trust Wallet"
                    })), r.a.createElement(F, {
                        size: "sm"
                    }), r.a.createElement(ge, null, r.a.createElement(be, {
                        icon: r.a.createElement("img", {
                            src: ce.a,
                            style: {
                                height: 52
                            }
                        }),
                        onConnect: function () {
                            c("injected"), window.localStorage.setItem("accountStatus", "1")
                        },
                        title: "TokenPocket"
                    })), r.a.createElement(F, {
                        size: "sm"
                    }), r.a.createElement(ge, null, r.a.createElement(be, {
                        icon: r.a.createElement("img", {
                            src: te.a,
                            style: {
                                height: 44
                            }
                        }),
                        onConnect: function () {
                            c("walletconnect"), window.localStorage.setItem("accountStatus", "1")
                        },
                        title: "WalletConnect"
                    })))), r.a.createElement(z, null, r.a.createElement(v, {
                        text: "Cancel",
                        variant: "secondary",
                        onClick: n
                    })))
                },
                we = t(3),
                Oe = t.n(we),
                je = t(6),
                ke = t(8),
                Te = t.n(ke),
                Ce = function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
                        t = e.dividedBy(new Te.a(10).pow(n));
                    return t.toNumber()
                },
                Be = function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
                    return e.dividedBy(new Te.a(10).pow(n)).toFixed()
                },
                Ae = t(41),
                Se = t.n(Ae),
                Me = t(222),
                De = function (e, n) {
                    return new(new Se.a(e).eth.Contract)(Me.abi, n)
                },
                Fe = function () {
                    var e = Object(je.a)(Oe.a.mark((function e(n, t, a) {
                        var r;
                        return Oe.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, n.methods.allowance(a, t.options.address).call();
                                case 3:
                                    return r = e.sent, e.abrupt("return", r);
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", "0");
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function (n, t, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                Ne = function () {
                    var e = Object(je.a)(Oe.a.mark((function e(n, t, a) {
                        var r, i;
                        return Oe.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = De(n, t), e.prev = 1, e.next = 4, r.methods.balanceOf(a).call();
                                case 4:
                                    return i = e.sent, e.abrupt("return", i);
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(1), e.abrupt("return", "0");
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 8]
                        ])
                    })));
                    return function (n, t, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                _e = function () {
                    var e = Object(a.useState)(0),
                        n = Object(u.a)(e, 2),
                        t = n[0],
                        r = n[1],
                        i = Object(p.h)().ethereum;
                    return Object(a.useEffect)((function () {
                        if (i) {
                            var e = new Se.a(i),
                                n = setInterval(Object(je.a)(Oe.a.mark((function n() {
                                    var a;
                                    return Oe.a.wrap((function (n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.next = 2, e.eth.getBlockNumber();
                                            case 2:
                                                a = n.sent, t !== a && r(a);
                                            case 4:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                }))), 1e3);
                            return function () {
                                return clearInterval(n)
                            }
                        }
                    }), [i]), t
                },
                Ie = function (e, n) {
                    var t = Object(a.useState)(0),
                        r = Object(u.a)(t, 2),
                        i = r[0],
                        c = r[1],
                        o = Object(p.h)(),
                        s = o.account,
                        l = o.ethereum,
                        d = _e(),
                        m = Object(a.useCallback)(Object(je.a)(Oe.a.mark((function t() {
                            var a;
                            return Oe.a.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Ne(l, e, n);
                                    case 2:
                                        a = t.sent, c(Ce(new Te.a(a)));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), [s, l, e]);
                    return Object(a.useEffect)((function () {
                        s && l && m()
                    }), [s, l, c, d, e]), i
                },
                Pe = function (e) {
                    var n = Object(a.useState)(new Te.a(0)),
                        t = Object(u.a)(n, 2),
                        r = t[0],
                        i = t[1],
                        c = Object(p.h)(),
                        o = c.account,
                        s = c.ethereum,
                        l = _e(),
                        d = Object(a.useCallback)(Object(je.a)(Oe.a.mark((function n() {
                            var t;
                            return Oe.a.wrap((function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, Ne(s, e, o);
                                    case 2:
                                        t = n.sent, i(new Te.a(t));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        }))), [o, s, e]);
                    return Object(a.useEffect)((function () {
                        o && s && d()
                    }), [o, s, i, l, e]), r
                },
                ze = t(32),
                Le = t(7),
                Re = t(10),
                Ke = t(134),
                Ue = t(223),
                Ge = t(224),
                He = t(225),
                We = t(226),
                Ve = t(227),
                Xe = t(228),
                Je = new ze.a(60),
                Ye = Je.times(60),
                qe = Ye.times(24),
                $e = (qe.times(365), new ze.a(0), new ze.a(1), new ze.a("4294967295"), new ze.a("340282366920938463463374607431768211455"), new ze.a("115792089237316195423570985008687907853269984665640564039457584007913129639935"), new ze.a("1e18"), {
                    sushi: {
                        97: "0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e",
                        56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
                    },
                    syrup: {
                        97: "0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9",
                        56: "0x009cF7bC57584b7998236eff51b98A168DceA9B0"
                    },
                    masterChef: {
                        97: "0x1d32c2945C8FDCBc7156c553B7cEa4325a17f4f9",
                        56: "0x73feaa1eE314F8c655E354234017bE2193C9E24E"
                    },
                    weth: {
                        97: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
                        56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
                    }
                }),
                Qe = [{
                    pid: 0,
                    lpAddresses: {
                        97: "0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e",
                        56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
                    },
                    tokenAddresses: {
                        97: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                        56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
                    },
                    name: "Meow STAKING",
                    symbol: "MEOW",
                    tokenSymbol: "SYRUP",
                    icon: "\ud83e\udd5e"
                }, {
                    pid: 1,
                    lpAddresses: {
                        97: "0xe70b7523f4bffa1f2e88d2ba709afd026030f412",
                        56: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6"
                    },
                    tokenAddresses: {
                        97: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                        56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
                    },
                    name: "Meow STAKING",
                    symbol: "MEOW-BNB FLIP",
                    tokenSymbol: "MEOW",
                    icon: "\ud83e\udd5e",
                    multiplier: "20X"
                }, {
                    pid: 2,
                    lpAddresses: {
                        97: "0x2f7682b64b88149ba3250aee32db712964de5fa9",
                        56: "0x1b96b92314c44b159149f7e0303511fb2fc4774f"
                    },
                    tokenAddresses: {
                        97: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                        56: "0xe9e7cea3dedca5984780bafc599bd69add087d56"
                    },
                    name: "Meow Party!",
                    symbol: "BUSD-BNB FLIP",
                    tokenSymbol: "BUSD",
                    icon: "\ud83e\udd5e",
                    multiplier: "10X"
                }, {
                    pid: 3,
                    lpAddresses: {
                        97: "0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce",
                        56: "0xba51d1ab95756ca4eab8737ecd450cd8f05384cf"
                    },
                    tokenAddresses: {
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
                        56: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47"
                    },
                    name: "ADA GAME",
                    symbol: "ADA-BNB FLIP",
                    tokenSymbol: "ADA",
                    icon: "\ud83e\udd5e",
                    multiplier: "5X"
                }, {
                    pid: 4,
                    lpAddresses: {
                        97: "0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce",
                        56: "0xc639187ef82271d8f517de6feae4faf5b517533c"
                    },
                    tokenAddresses: {
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
                        56: "0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18"
                    },
                    name: "BAND GAME",
                    symbol: "BAND-BNB FLIP",
                    tokenSymbol: "BAND",
                    icon: "\ud83e\udd5e",
                    multiplier: "5X"
                }, {
                    pid: 5,
                    lpAddresses: {
                        97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D",
                        56: "0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c"
                    },
                    tokenAddresses: {
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
                        56: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402"
                    },
                    name: "DOT GAME",
                    symbol: "DOT-BNB FLIP",
                    tokenSymbol: "DOT",
                    icon: "\ud83e\udd5e",
                    multiplier: "5X"
                }, {
                    pid: 6,
                    lpAddresses: {
                        97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D",
                        56: "0x981d2ba1b298888408d342c39c2ab92e8991691e"
                    },
                    tokenAddresses: {
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
                        56: "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6"
                    },
                    name: "EOS GAME",
                    symbol: "EOS-BNB FLIP",
                    tokenSymbol: "EOS",
                    icon: "\ud83e\udd5e",
                    multiplier: "5X"
                }, {
                    pid: 7,
                    lpAddresses: {
                        97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D",
                        56: "0xaebe45e3a03b734c68e5557ae04bfc76917b4686"
                    },
                    tokenAddresses: {
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
                        56: "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd"
                    },
                    name: "LINK GAME",
                    symbol: "LINK-BNB FLIP",
                    tokenSymbol: "LINK",
                    icon: "\ud83e\udd5e",
                    multiplier: "5X"
                }, {
                    pid: 8,
                    lpAddresses: {
                        97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D",
                        56: "0xc2eed0f5a0dc28cfa895084bc0a9b8b8279ae492"
                    },
                    tokenAddresses: {
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
                        56: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5"
                    },
                    symbol: "BAKE-BNB Bakery LP",
                    tokenSymbol: "BAKE",
                    icon: "\ud83e\udd5e",
                    multiplier: "1X"
                }, {
                    pid: 9,
                    lpAddresses: {
                        97: "0xE66790075ad839978fEBa15D4d8bB2b415556a1D",
                        56: "0xd937FB9E6e47F3805981453BFB277a49FFfE04D7"
                    },
                    tokenAddresses: {
                        97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
                        56: "0xae9269f27437f0fcbc232d39ec814844a51d6b8f"
                    },
                    symbol: "BURGER-BNB FLIP",
                    tokenSymbol: "BURGER",
                    icon: "\ud83e\udd5e",
                    multiplier: "1X"
                }],
                Ze = [{
                    pid: 0,
                    name: "Meow Party!",
                    symbol: "MEOW-BNB",
                    tokenSymbol: "MEOW",
                    multiplier: "20X"
                }, {
                    pid: 1,
                    name: "BURGER GAME",
                    symbol: "BUSD-BNB",
                    tokenSymbol: "BUSD",
                    multiplier: "10X"
                }, {
                    pid: 10,
                    symbol: "ADA-BNB",
                    tokenSymbol: "ADA",
                    multiplier: "5X"
                }, {
                    pid: 7,
                    symbol: "BAND-BNB",
                    tokenSymbol: "BAND",
                    multiplier: "5X"
                }, {
                    pid: 8,
                    symbol: "DOT-BNB",
                    tokenSymbol: "DOT",
                    multiplier: "5X"
                }, {
                    pid: 6,
                    symbol: "EOS-BNB",
                    tokenSymbol: "EOS",
                    multiplier: "5X"
                }, {
                    pid: 9,
                    symbol: "LINK-BNB",
                    tokenSymbol: "LINK",
                    multiplier: "5X"
                }, {
                    pid: 3,
                    symbol: "BAKE-BNB Bakery LP",
                    tokenSymbol: "BAKE",
                    multiplier: "1X"
                }, {
                    pid: 4,
                    name: "BURGER GAME",
                    symbol: "BURGER-BNB",
                    tokenSymbol: "BURGER",
                    multiplier: "1X"
                }],
                en = {
                    Hash: 0,
                    Confirmed: 1,
                    Both: 2,
                    Simulate: 3
                },
                nn = function () {
                    function e(n, t, a, r) {
                        var i = this;
                        Object(Le.a)(this, e), this.web3 = a, this.defaultConfirmations = r.defaultConfirmations, this.autoGasMultiplier = r.autoGasMultiplier || 1.5, this.confirmationType = r.confirmationType || en.Confirmed, this.defaultGas = r.defaultGas, this.defaultGasPrice = r.defaultGasPrice, this.sushi = new this.web3.eth.Contract(He), this.masterChef = new this.web3.eth.Contract(Ge), this.syrup = new this.web3.eth.Contract(We), this.weth = new this.web3.eth.Contract(Xe), this.pools = Qe.map((function (e) {
                            return Object.assign(e, {
                                lpAddress: e.lpAddresses[t],
                                tokenAddress: e.tokenAddresses[t],
                                lpContract: new i.web3.eth.Contract(Ve),
                                tokenContract: new i.web3.eth.Contract(Ue)
                            })
                        })), this.setProvider(n, t), this.setDefaultAccount(this.web3.eth.defaultAccount)
                    }
                    return Object(Re.a)(e, [{
                        key: "setProvider",
                        value: function (e, n) {
                            var t = function (t, a) {
                                t.setProvider(e), a ? t.options.address = a : console.error("Contract address not found in network", n)
                            };
                            t(this.sushi, $e.sushi[n]), t(this.syrup, $e.syrup[n]), t(this.masterChef, $e.masterChef[n]), t(this.weth, $e.weth[n]), this.pools.forEach((function (e) {
                                var n = e.lpContract,
                                    a = e.lpAddress,
                                    r = e.tokenContract,
                                    i = e.tokenAddress;
                                t(n, a), t(r, i)
                            }))
                        }
                    }, {
                        key: "setDefaultAccount",
                        value: function (e) {
                            this.sushi.options.from = e, this.masterChef.options.from = e, this.syrup.options.from = e
                        }
                    }, {
                        key: "callContractFunction",
                        value: function () {
                            var e = Object(je.a)(Oe.a.mark((function e(n, t) {
                                var a, r, i, c, u, o, s, l, p, d, m, f, y, b, h, x, v, g, E, w, O, j = this;
                                return Oe.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (a = t.confirmations, r = t.confirmationType, i = t.autoGasMultiplier, c = Object(Ke.a)(t, ["confirmations", "confirmationType", "autoGasMultiplier"]), this.blockGasLimit) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.next = 4, this.setGasLimit();
                                        case 4:
                                            if (!c.gasPrice && this.defaultGasPrice && (c.gasPrice = this.defaultGasPrice), r !== en.Simulate && t.gas) {
                                                e.next = 30;
                                                break
                                            }
                                            if (!this.defaultGas || r === en.Simulate) {
                                                e.next = 10;
                                                break
                                            }
                                            c.gas = this.defaultGas, e.next = 27;
                                            break;
                                        case 10:
                                            return e.prev = 10, console.log("estimating gas"), e.next = 14, n.estimateGas(c);
                                        case 14:
                                            u = e.sent, e.next = 24;
                                            break;
                                        case 17:
                                            throw e.prev = 17, e.t0 = e.catch(10), o = n.encodeABI(), s = t.from, l = t.value, p = n._parent._address, e.t0.transactionData = {
                                                from: s,
                                                value: l,
                                                data: o,
                                                to: p
                                            }, e.t0;
                                        case 24:
                                            d = i || this.autoGasMultiplier, m = Math.floor(u * d), c.gas = m < this.blockGasLimit ? m : this.blockGasLimit;
                                        case 27:
                                            if (r !== en.Simulate) {
                                                e.next = 30;
                                                break
                                            }
                                            return f = c.gas, e.abrupt("return", {
                                                gasEstimate: u,
                                                g: f
                                            });
                                        case 30:
                                            if (c.value ? c.value = new ze.a(c.value).toFixed(0) : c.value = "0", y = n.send(c), h = (b = {
                                                    INITIAL: 0,
                                                    RESOLVED: 1,
                                                    REJECTED: 2
                                                }).INITIAL, x = b.INITIAL, v = void 0 !== r ? r : this.confirmationType, Object.values(en).includes(v)) {
                                                e.next = 38;
                                                break
                                            }
                                            throw new Error("Invalid confirmation type: ".concat(v));
                                        case 38:
                                            if (v !== en.Hash && v !== en.Both || (g = new Promise((function (e, n) {
                                                    y.on("error", (function (e) {
                                                        h === b.INITIAL && (h = b.REJECTED, n(e), y.off())
                                                    })), y.on("transactionHash", (function (n) {
                                                        h === b.INITIAL && (h = b.RESOLVED, e(n), v !== en.Both && y.off())
                                                    }))
                                                }))), v !== en.Confirmed && v !== en.Both || (E = new Promise((function (e, n) {
                                                    y.on("error", (function (e) {
                                                        v !== en.Confirmed && h !== b.RESOLVED || x !== b.INITIAL || (x = b.REJECTED, n(e), y.off())
                                                    }));
                                                    var t = a || j.defaultConfirmations;
                                                    t ? y.on("confirmation", (function (n, a) {
                                                        n >= t && (x === b.INITIAL && (x = b.RESOLVED, e(a), y.off()))
                                                    })) : y.on("receipt", (function (n) {
                                                        x = b.RESOLVED, e(n), y.off()
                                                    }))
                                                }))), v !== en.Hash) {
                                                e.next = 46;
                                                break
                                            }
                                            return e.next = 43, g;
                                        case 43:
                                            return w = e.sent, this.notifier && this.notifier.hash(w), e.abrupt("return", {
                                                transactionHash: w
                                            });
                                        case 46:
                                            if (v !== en.Confirmed) {
                                                e.next = 48;
                                                break
                                            }
                                            return e.abrupt("return", E);
                                        case 48:
                                            return e.next = 50, g;
                                        case 50:
                                            return O = e.sent, this.notifier && this.notifier.hash(O), e.abrupt("return", {
                                                transactionHash: O,
                                                confirmation: E
                                            });
                                        case 53:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [10, 17]
                                ])
                            })));
                            return function (n, t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "callConstantContractFunction",
                        value: function () {
                            var e = Object(je.a)(Oe.a.mark((function e(n, t) {
                                var a, r, i;
                                return Oe.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = n, r = t.blockNumber, i = Object(Ke.a)(t, ["blockNumber"]), e.abrupt("return", a.call(i, r));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (n, t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setGasLimit",
                        value: function () {
                            var e = Object(je.a)(Oe.a.mark((function e() {
                                var n;
                                return Oe.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.web3.eth.getBlock("latest");
                                        case 2:
                                            n = e.sent, this.blockGasLimit = n.gasLimit - 1e5;
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), e
                }(),
                tn = function e(n, t) {
                    Object(Le.a)(this, e), this.contracts = n, this.accountInfo = t, this.type = "", this.allocation = [], this.balances = {}, this.status = "", this.approvals = {}, this.walletInfo = {}
                },
                an = "Returned error: VM Exception while processing transaction: revert",
                rn = function () {
                    function e(n) {
                        Object(Le.a)(this, e), this.provider = n
                    }
                    return Object(Re.a)(e, [{
                        key: "setProvider",
                        value: function (e) {
                            this.provider = e
                        }
                    }, {
                        key: "resetEVM",
                        value: function () {
                            var e = Object(je.a)(Oe.a.mark((function e() {
                                var n, t = arguments;
                                return Oe.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.length > 0 && void 0 !== t[0] ? t[0] : "0x1", e.next = 3, this.snapshot();
                                        case 3:
                                            if (e.sent === n) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.next = 7, this.reset(n);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "reset",
                        value: function () {
                            var e = Object(je.a)(Oe.a.mark((function e(n) {
                                return Oe.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new Error("id must be set");
                                        case 2:
                                            return e.next = 4, this.callJsonrpcMethod("evm_revert", [n]);
                                        case 4:
                                            return e.abrupt("return", this.snapshot());
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function (n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "snapshot",
                        value: function () {
                            var e = Object(je.a)(Oe.a.mark((function e() {
                                return Oe.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.callJsonrpcMethod("evm_snapshot"));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "evmRevert",
                        value: function () {
                            var e = Object(je.a)(Oe.a.mark((function e(n) {
                                return Oe.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.callJsonrpcMethod("evm_revert", [n]));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function (n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "stopMining",
                        value: function () {
                            var e = Object(je.a)(Oe.a.mark((function e() {
                                return Oe.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.callJsonrpcMethod("miner_stop"));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "startMining",
                        value: function () {
                            var e = Object(je.a)(Oe.a.mark((function e() {
                                return Oe.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.callJsonrpcMethod("miner_start"));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "mineBlock",
                        value: function () {
                            var e = Object(je.a)(Oe.a.mark((function e() {
                                return Oe.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.callJsonrpcMethod("evm_mine"));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "increaseTime",
                        value: function () {
                            var e = Object(je.a)(Oe.a.mark((function e(n) {
                                return Oe.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.callJsonrpcMethod("evm_increaseTime", [n]));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function (n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "callJsonrpcMethod",
                        value: function () {
                            var e = Object(je.a)(Oe.a.mark((function e(n, t) {
                                var a, r;
                                return Oe.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = {
                                                method: n,
                                                params: t,
                                                jsonrpc: "2.0",
                                                id: (new Date).getTime()
                                            }, e.next = 3, this.send(a);
                                        case 3:
                                            return r = e.sent, e.abrupt("return", r.result);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function (n, t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "send",
                        value: function () {
                            var e = Object(je.a)(Oe.a.mark((function e(n) {
                                var t = this;
                                return Oe.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", new Promise((function (e, a) {
                                                t.provider.send(n, (function (n, t) {
                                                    n ? a(n) : e(t)
                                                }))
                                            })));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "assertCertainError",
                        value: function (e, n) {
                            var t = e.message,
                                a = t.search(n),
                                r = t;
                            0 === a && (r = t.substring(a, a + n.length)), expect(r).toEqual(n)
                        }
                    }, {
                        key: "expectThrow",
                        value: function () {
                            var e = Object(je.a)(Oe.a.mark((function e(n, t) {
                                return Oe.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, n;
                                        case 3:
                                            throw new Error("Did not throw");
                                        case 6:
                                            e.prev = 6, e.t0 = e.catch(0), this.assertCertainError(e.t0, an), t && "true" !== Object({
                                                NODE_ENV: "production",
                                                PUBLIC_URL: "",
                                                WDS_SOCKET_HOST: void 0,
                                                WDS_SOCKET_PATH: void 0,
                                                WDS_SOCKET_PORT: void 0
                                            }).COVERAGE && this.assertCertainError(e.t0, "".concat(an, " ").concat(t));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 6]
                                ])
                            })));
                            return function (n, t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "expectAssertFailure",
                        value: function () {
                            var e = Object(je.a)(Oe.a.mark((function e(n) {
                                return Oe.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, n;
                                        case 3:
                                            throw new Error("Did not throw");
                                        case 6:
                                            e.prev = 6, e.t0 = e.catch(0), this.assertCertainError(e.t0, "Returned error: VM Exception while processing transaction: invalid opcode");
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 6]
                                ])
                            })));
                            return function (n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), e
                }(),
                cn = function () {
                    function e(n, t, a, r) {
                        var i;
                        Object(Le.a)(this, e), i = "string" === typeof n ? n.includes("wss") ? new Se.a.providers.WebsocketProvider(n, r.ethereumNodeTimeout || 1e4) : new Se.a.providers.HttpProvider(n, r.ethereumNodeTimeout || 1e4) : n, this.web3 = new Se.a(i), a && (this.testing = new rn(i), this.snapshot = this.testing.snapshot()), r.defaultAccount && (this.web3.eth.defaultAccount = r.defaultAccount), this.contracts = new nn(i, t, this.web3, r), this.sushiAddress = $e.sushi[t], this.masterChefAddress = $e.masterChef[t], this.wethAddress = $e.weth[t], this.syrupAddress = $e.syrup[t]
                    }
                    return Object(Re.a)(e, [{
                        key: "resetEVM",
                        value: function () {
                            var e = Object(je.a)(Oe.a.mark((function e() {
                                return Oe.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            this.testing.resetEVM(this.snapshot);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "addAccount",
                        value: function (e, n) {
                            this.accounts.push(new tn(this.contracts, e, n))
                        }
                    }, {
                        key: "setProvider",
                        value: function (e, n) {
                            this.web3.setProvider(e), this.contracts.setProvider(e, n), this.operation.setNetworkId(n)
                        }
                    }, {
                        key: "setDefaultAccount",
                        value: function (e) {
                            this.web3.eth.defaultAccount = e, this.contracts.setDefaultAccount(e)
                        }
                    }, {
                        key: "getDefaultAccount",
                        value: function () {
                            return this.web3.eth.defaultAccount
                        }
                    }, {
                        key: "loadAccount",
                        value: function (e) {
                            var n = this.web3.eth.accounts.wallet.add(e.privateKey);
                            if (!n || e.address && e.address.toLowerCase() !== n.address.toLowerCase()) throw new Error("Loaded account address mismatch.\n        Expected ".concat(e.address, ", got ").concat(n ? n.address : null))
                        }
                    }, {
                        key: "toBigN",
                        value: function (e) {
                            return Te()(e)
                        }
                    }]), e
                }();
            ze.a.config({
                EXPONENTIAL_AT: 1e3,
                DECIMAL_PLACES: 80
            });
            var un = Object(a.createContext)({
                    sushi: void 0
                }),
                on = function (e) {
                    var n = e.children,
                        t = Object(p.h)().ethereum,
                        i = Object(a.useState)(),
                        c = Object(u.a)(i, 2),
                        o = c[0],
                        s = c[1];
                    return window.sushi = o, window.eth = t, Object(a.useEffect)((function () {
                        if (t) {
                            var e = Number(t.chainId),
                                n = new cn(t, e, !1, {
                                    defaultAccount: t.selectedAddress,
                                    defaultConfirmations: 1,
                                    autoGasMultiplier: 1.5,
                                    testing: !1,
                                    defaultGas: "6000000",
                                    defaultGasPrice: "1000000000000",
                                    accounts: [],
                                    ethereumNodeTimeout: 1e4
                                });
                            s(n), window.sushisauce = n
                        }
                    }), [t]), r.a.createElement(un.Provider, {
                        value: {
                            sushi: o
                        }
                    }, n)
                },
                sn = function () {
                    return Object(a.useContext)(un).sushi
                },
                ln = t(212);
            Te.a.config({
                EXPONENTIAL_AT: 1e3,
                DECIMAL_PLACES: 80
            });
            var pn = function (e) {
                    return e && e.sushiAddress
                },
                dn = function (e) {
                    return e && e.contracts && e.contracts.masterChef
                },
                mn = function (e) {
                    return e ? e.contracts.pools.map((function (n) {
                        var t = n.pid,
                            a = n.name,
                            r = n.symbol,
                            i = n.icon,
                            c = n.tokenAddress,
                            u = n.tokenSymbol,
                            o = n.tokenContract,
                            s = n.lpAddress,
                            l = n.lpContract,
                            p = n.multiplier;
                        return {
                            pid: t,
                            id: r,
                            name: a,
                            lpToken: r,
                            lpTokenAddress: s,
                            lpContract: l,
                            tokenAddress: c,
                            tokenSymbol: u,
                            tokenContract: o,
                            earnToken: "sushi",
                            earnTokenAddress: e.contracts.sushi.options.address,
                            icon: i,
                            multiplier: p
                        }
                    })) : []
                },
                fn = function () {
                    var e = Object(je.a)(Oe.a.mark((function e(n, t) {
                        var a, r, i;
                        return Oe.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, n.methods.poolInfo(t).call();
                                case 2:
                                    return a = e.sent, r = a.allocPoint, e.next = 6, n.methods.totalAllocPoint().call();
                                case 6:
                                    return i = e.sent, e.abrupt("return", new Te.a(r).div(new Te.a(i)));
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (n, t) {
                        return e.apply(this, arguments)
                    }
                }(),
                yn = function () {
                    var e = Object(je.a)(Oe.a.mark((function e(n, t, a) {
                        return Oe.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", n.methods.pendingCake(t, a).call());
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (n, t, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                bn = function () {
                    var e = Object(je.a)(Oe.a.mark((function e(n, t, a, r, i) {
                        var c, u, o, s, l, p, d, m, f, y;
                        return Oe.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, r.methods.balanceOf(a.options.address).call();
                                case 2:
                                    return c = e.sent, e.next = 5, r.methods.decimals().call();
                                case 5:
                                    return u = e.sent, e.next = 8, a.methods.balanceOf(n.options.address).call();
                                case 8:
                                    return o = e.sent, e.next = 11, a.methods.totalSupply().call();
                                case 11:
                                    return s = e.sent, e.next = 14, t.methods.balanceOf(a.options.address).call();
                                case 14:
                                    return l = e.sent, p = new Te.a(o).div(new Te.a(s)), d = new Te.a(l), m = p.times(d).times(new Te.a(2)), f = new Te.a(c).times(p).div(new Te.a(10).pow(u)), y = new Te.a(l).times(p).div(new Te.a(10).pow(18)), e.t0 = f, e.t1 = y, e.t2 = m.div(new Te.a(10).pow(18)), e.t3 = y.div(f), e.next = 26, fn(n, i);
                                case 26:
                                    return e.t4 = e.sent, e.abrupt("return", {
                                        tokenAmount: e.t0,
                                        wethAmount: e.t1,
                                        totalWethValue: e.t2,
                                        tokenPriceInWeth: e.t3,
                                        poolWeight: e.t4
                                    });
                                case 28:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (n, t, a, r, i) {
                        return e.apply(this, arguments)
                    }
                }(),
                hn = function () {
                    var e = Object(je.a)(Oe.a.mark((function e(n, t, a) {
                        return Oe.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", n.methods.approve(t.options.address, ln.ethers.constants.MaxUint256).send({
                                        from: a
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (n, t, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                xn = function () {
                    var e = Object(je.a)(Oe.a.mark((function e(n) {
                        return Oe.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.t0 = Te.a, e.next = 3, n.contracts.sushi.methods.totalSupply().call();
                                case 3:
                                    return e.t1 = e.sent, e.abrupt("return", new e.t0(e.t1));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (n) {
                        return e.apply(this, arguments)
                    }
                }(),
                vn = function () {
                    var e = Object(je.a)(Oe.a.mark((function e(n, t, a, r) {
                        return Oe.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (0 !== t) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", n.methods.enterStaking(new Te.a(a).times(new Te.a(10).pow(18)).toString()).send({
                                        from: r
                                    }).on("transactionHash", (function (e) {
                                        return console.log(e), e.transactionHash
                                    })));
                                case 2:
                                    return e.abrupt("return", n.methods.deposit(t, new Te.a(a).times(new Te.a(10).pow(18)).toString()).send({
                                        from: r
                                    }).on("transactionHash", (function (e) {
                                        return console.log(e), e.transactionHash
                                    })));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (n, t, a, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                gn = function () {
                    var e = Object(je.a)(Oe.a.mark((function e(n, t, a, r) {
                        return Oe.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (0 !== t) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", n.methods.leaveStaking(new Te.a(a).times(new Te.a(10).pow(18)).toString()).send({
                                        from: r
                                    }).on("transactionHash", (function (e) {
                                        return console.log(e), e.transactionHash
                                    })));
                                case 2:
                                    return e.abrupt("return", n.methods.withdraw(t, new Te.a(a).times(new Te.a(10).pow(18)).toString()).send({
                                        from: r
                                    }).on("transactionHash", (function (e) {
                                        return console.log(e), e.transactionHash
                                    })));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (n, t, a, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                En = function () {
                    var e = Object(je.a)(Oe.a.mark((function e(n, t, a) {
                        return Oe.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (0 !== t) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", n.methods.leaveStaking("0").send({
                                        from: a
                                    }).on("transactionHash", (function (e) {
                                        return console.log(e), e.transactionHash
                                    })));
                                case 2:
                                    return e.abrupt("return", n.methods.deposit(t, "0").send({
                                        from: a
                                    }).on("transactionHash", (function (e) {
                                        return console.log(e), e.transactionHash
                                    })));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (n, t, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                wn = function () {
                    var e = Object(je.a)(Oe.a.mark((function e(n, t, a) {
                        var r, i;
                        return Oe.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, n.methods.userInfo(t, a).call();
                                case 3:
                                    return r = e.sent, i = r.amount, e.abrupt("return", new Te.a(i));
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), e.abrupt("return", new Te.a(0));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function (n, t, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                On = function () {
                    var e = Object(je.a)(Oe.a.mark((function e(n, t) {
                        return Oe.a.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!((new Date).getTime() / 1e3 >= 1597172400)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", n.methods.exit().send({
                                        from: t
                                    }).on("transactionHash", (function (e) {
                                        return console.log(e), e.transactionHash
                                    })));
                                case 5:
                                    alert("pool not active");
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (n, t) {
                        return e.apply(this, arguments)
                    }
                }();

            function jn() {
                var e = Object(d.a)(["\n  color: ", ";\n"]);
                return jn = function () {
                    return e
                }, e
            }
            var kn = l.c.div(jn(), (function (e) {
                    return e.theme.color.grey[400]
                })),
                Tn = function (e) {
                    var n = e.text;
                    return r.a.createElement(kn, null, n)
                },
                Cn = t(98),
                Bn = t.n(Cn);

            function An() {
                var e = Object(d.a)(["\n  font-family: 'Roboto Mono', monospace;\n  color: ", ";\n  font-size: 30px;\n  font-weight: 900;\n"]);
                return An = function () {
                    return e
                }, e
            }
            var Sn = l.c.div(An(), (function (e) {
                    return e.theme.color.grey[600]
                })),
                Mn = function (e) {
                    var n = e.value,
                        t = e.decimals,
                        i = e.fontSize,
                        c = void 0 === i ? "30px" : i,
                        o = Object(a.useState)(0),
                        s = Object(u.a)(o, 2),
                        l = s[0],
                        p = s[1],
                        d = Object(a.useState)(0),
                        m = Object(u.a)(d, 2),
                        f = m[0],
                        y = m[1];
                    return Object(a.useEffect)((function () {
                        "number" === typeof n && (p(f), y(n))
                    }), [n]), r.a.createElement(Sn, {
                        style: {
                            fontSize: c
                        }
                    }, "string" == typeof n ? n : r.a.createElement(Bn.a, {
                        start: l,
                        end: f,
                        decimals: void 0 !== t ? t : f < 0 ? 4 : f > 1e5 ? 0 : 3,
                        duration: 1,
                        separator: ","
                    }))
                };

            function Dn() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin-bottom: ", "px;\n"]);
                return Dn = function () {
                    return e
                }, e
            }

            function Fn() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]);
                return Fn = function () {
                    return e
                }, e
            }
            var Nn = l.c.div(Fn()),
                _n = l.c.div(Dn(), (function (e) {
                    return e.theme.spacing[4]
                })),
                In = function (e) {
                    var n = e.onDismiss,
                        t = Object(p.h)(),
                        i = t.account,
                        c = t.reset,
                        u = Object(a.useCallback)((function () {
                            n(), window.localStorage.removeItem("accountStatus"), c()
                        }), [n, c]),
                        o = sn(),
                        s = Pe(pn(o));
                    return r.a.createElement(S, null, r.a.createElement(H, {
                        text: "My Account"
                    }), r.a.createElement(K, null, r.a.createElement(F, null), r.a.createElement("div", {
                        style: {
                            display: "flex"
                        }
                    }, r.a.createElement(_n, null, r.a.createElement(w, null, r.a.createElement("span", null, "\ud83e\udd5e")), r.a.createElement(Nn, null, r.a.createElement(Mn, {
                        value: Ce(s)
                    }), r.a.createElement(Tn, {
                        text: "MEOW Balance"
                    })))), r.a.createElement(F, null), r.a.createElement(v, {
                        href: "https://bscscan.com/address/".concat(i),
                        text: "View on BscScan",
                        variant: "secondary"
                    }), r.a.createElement(F, null), r.a.createElement(v, {
                        onClick: u,
                        text: "Sign out",
                        variant: "secondary"
                    })), r.a.createElement(z, null, r.a.createElement(v, {
                        onClick: n,
                        text: "Cancel"
                    })))
                };

            function Pn() {
                var e = Object(d.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ", "px;\n  padding: 0 ", "px;\n  text-decoration: none;\n"]);
                return Pn = function () {
                    return e
                }, e
            }

            function zn() {
                var e = Object(d.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ", "px;\n  padding: 0 ", "px;\n  text-decoration: none;\n"]);
                return zn = function () {
                    return e
                }, e
            }

            function Ln() {
                var e = Object(d.a)(["\n  align-items: center;\n  background: none;\n  border: 0;\n  border-radius: 12px;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  font-size: 24px;\n  font-weight: 700;\n  height: ", "px;\n  justify-content: center;\n  outline: none;\n  padding-left: ", "px;\n  padding-right: ", "px;\n  pointer-events: ", ";\n  width: 100%;\n  &:hover {\n    background-color: ", ";\n  }\n"]);
                return Ln = function () {
                    return e
                }, e
            }
            var Rn = l.c.button(Ln(), (function (e) {
                    return e.disabled ? "".concat(e.color, "55") : e.color
                }), (function (e) {
                    return e.size
                }), (function (e) {
                    return e.padding
                }), (function (e) {
                    return e.padding
                }), (function (e) {
                    return e.disabled ? "none" : void 0
                }), (function (e) {
                    return e.theme.color.grey[100]
                })),
                Kn = Object(l.c)(o.b)(zn(), (function (e) {
                    return -e.theme.spacing[4]
                }), (function (e) {
                    return e.theme.spacing[4]
                })),
                Un = l.c.a(Pn(), (function (e) {
                    return -e.theme.spacing[4]
                }), (function (e) {
                    return e.theme.spacing[4]
                })),
                Gn = function (e) {
                    var n, t, i, c, u = e.children,
                        o = e.disabled,
                        s = e.href,
                        p = e.onClick,
                        d = e.size,
                        m = e.text,
                        f = e.to,
                        y = e.variant,
                        b = Object(a.useContext)(l.a),
                        h = (b.color, b.spacing);
                    switch (y) {
                        case "secondary":
                            n = "#fff";
                            break;
                        case "default":
                            n = "#fff";
                        default:
                            n = "#fff"
                    }
                    switch (d) {
                        case "sm":
                            i = h[3], t = 36, c = 14;
                            break;
                        case "lg":
                            i = h[4], t = 72, c = 16;
                            break;
                        case "md":
                        default:
                            i = h[4], t = 56, c = 16
                    }
                    var x = Object(a.useMemo)((function () {
                        return f ? r.a.createElement(Kn, {
                            to: f
                        }, m) : s ? r.a.createElement(Un, {
                            href: s,
                            target: "__blank"
                        }, m) : m
                    }), [s, m, f]);
                    return r.a.createElement(Rn, {
                        boxShadow: void 0,
                        color: n,
                        disabled: o,
                        fontSize: c,
                        onClick: p,
                        padding: i,
                        size: t
                    }, u, x)
                };

            function Hn() {
                var e = Object(d.a)(["\nbackground: none !important;\nborder: none;\n"]);
                return Hn = function () {
                    return e
                }, e
            }

            function Wn() {
                var e = Object(d.a)(["\nbackground: none !important;\nborder: none;\n"]);
                return Wn = function () {
                    return e
                }, e
            }
            var Vn = l.c.div(Wn()),
                Xn = (l.c.div(Hn()), function (e) {
                    var n = Q(r.a.createElement(In, null)),
                        t = Object(u.a)(n, 1)[0],
                        i = Q(r.a.createElement(Ee, null), "provider"),
                        c = Object(u.a)(i, 1)[0],
                        o = Object(p.h)(),
                        s = o.account,
                        l = (o.connect, o.status, Object(a.useCallback)((function () {
                            c()
                        }), [c]));
                    return r.a.createElement(Vn, null, s ? r.a.createElement(Gn, {
                        onClick: t,
                        size: "sm",
                        text: "\ud83d\udd12 My Wallet"
                    }) : r.a.createElement(Gn, {
                        onClick: l,
                        size: "sm",
                        text: "\ud83d\udd13 Unlock Wallet"
                    }))
                });

            function Jn() {
                var e = Object(d.a)(["\n  box-sizing: border-box;\n  color: #fff;\n  font-size: 24px;\n  font-weight: 700;\n  padding: ", "px\n    ", "px;\n  text-align: center;\n  text-decoration: none;\n  width: 100%;\n  &:hover {\n    color: ", ";\n  }\n  &.active {\n    color: ", ";\n  }\n"]);
                return Jn = function () {
                    return e
                }, e
            }

            function Yn() {
                var e = Object(d.a)(["\n  animation: ", " 0.3s forwards ease-out;\n  background-color: ", ";\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 100%;\n  bottom: 0;\n  width: calc(100% - 48px);\n"]);
                return Yn = function () {
                    return e
                }, e
            }

            function qn() {
                var e = Object(d.a)(["\n margin-bottom: 2em;\n"]);
                return qn = function () {
                    return e
                }, e
            }

            function $n() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: flex-end;\n  width: 156px;\n  @media (max-width: 400px) {\n    justify-content: center;\n    width: auto;\n  }\n"]);
                return $n = function () {
                    return e
                }, e
            }

            function Qn() {
                var e = Object(d.a)(["\n  0% {\n    transform: translateX(0)\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n"]);
                return Qn = function () {
                    return e
                }, e
            }

            function Zn() {
                var e = Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n"]);
                return Zn = function () {
                    return e
                }, e
            }

            function et() {
                var e = Object(d.a)(["\n  background-color: ", "aa;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"]);
                return et = function () {
                    return e
                }, e
            }
            var nt = l.c.div(et(), (function (e) {
                    return e.theme.color.grey[600]
                })),
                tt = l.c.div(Zn()),
                at = Object(l.d)(Qn()),
                rt = (l.c.div($n()), l.c.div(qn())),
                it = l.c.div(Yn(), at, (function (e) {
                    return e.theme.color.grey[200]
                })),
                ct = Object(l.c)(o.c)(Jn(), (function (e) {
                    return e.theme.spacing[3]
                }), (function (e) {
                    return e.theme.spacing[4]
                }), (function (e) {
                    return e.theme.color.grey[500]
                }), (function (e) {
                    return e.theme.color.primary.main
                })),
                ut = function (e) {
                    var n = e.onDismiss;
                    return e.visible ? r.a.createElement(tt, null, r.a.createElement(nt, {
                        onClick: n
                    }), r.a.createElement(it, null, r.a.createElement(rt, {
                        onClick: n
                    }, r.a.createElement(Xn, null)), r.a.createElement(ct, {
                        exact: !0,
                        activeClassName: "active",
                        to: "/",
                        onClick: n
                    }, "\ud83c\udfe1 Home"), r.a.createElement(ct, {
                        exact: !0,
                        activeClassName: "active",
                        to: "/farms",
                        onClick: n
                    }, "\ud83d\udc68\u200d\ud83c\udf3e Farms"), r.a.createElement(ct, {
                        exact: !0,
                        activeClassName: "active",
                        to: "/staking",
                        onClick: n
                    }, "\ud83e\udd69 Staking"), r.a.createElement("a", {
                        style: {
                            paddingTop: "0.6em",
                            color: "white",
                            width: "100%",
                            fontSize: "24px",
                            fontWeight: 700,
                            boxSizing: "border-box",
                            textAlign: "center",
                            textDecoration: "none"
                        },
                        href: "https://exchange.kittyexchange.finance",
                        onClick: n
                    }, "\ud83d\udd04 Exchange"), r.a.createElement("a", {
                        style: {
                            paddingTop: "1.2em",
                            color: "white",
                            width: "100%",
                            fontSize: "24px",
                            fontWeight: 700,
                            boxSizing: "border-box",
                            textAlign: "center",
                            textDecoration: "none"
                        },
                        href: "https://docs.kittyexchange.finance",
                        onClick: n
                    }, "\ud83d\udcc4 Docs"))) : null
                };

            function ot() {
                var e = Object(d.a)(["\n  box-sizing: border-box;\n  margin: 0 auto;\n  max-width: ", "px;\n  padding: 0 ", "px;\n  width: 100%;\n"]);
                return ot = function () {
                    return e
                }, e
            }
            var st = l.c.div(ot(), (function (e) {
                    return e.width
                }), (function (e) {
                    return e.theme.spacing[4]
                })),
                lt = function (e) {
                    var n, t = e.children,
                        i = e.size,
                        c = void 0 === i ? "md" : i,
                        u = Object(a.useContext)(l.a).siteWidth;
                    switch (c) {
                        case "sm":
                            n = u / 2;
                            break;
                        case "md":
                            n = 2 * u / 3;
                            break;
                        case "lg":
                        default:
                            n = u
                    }
                    return r.a.createElement(st, {
                        width: n
                    }, t)
                },
                pt = t(229),
                dt = t.n(pt);

            function mt() {
                var e = Object(d.a)(["\n  font-family: 'Kaushan Script', sans-serif;\n"]);
                return mt = function () {
                    return e
                }, e
            }

            function ft() {
                var e = Object(d.a)(["\n  color: ", ";\n  font-family: 'Reem Kufi', sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  margin-left: ", "px;\n  @media (max-width: 400px) {\n    display: none;\n  }\n"]);
                return ft = function () {
                    return e
                }, e
            }

            function yt() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  min-height: 44px;\n  min-width: 44px;\n  padding: 0;\n  text-decoration: none;\n"]);
                return yt = function () {
                    return e
                }, e
            }
            var bt = Object(l.c)(o.b)(yt()),
                ht = (l.c.span(ft(), (function (e) {
                    return e.theme.color.grey[600]
                }), (function (e) {
                    return e.theme.spacing[2]
                })), l.c.span(mt()), function () {
                    return r.a.createElement(bt, {
                        to: "/"
                    }, r.a.createElement("img", {
                        src: dt.a,
                        height: "32",
                        style: {
                            marginTop: -4
                        }
                    }))
                });

            function xt() {
                var e = Object(d.a)([""]);
                return xt = function () {
                    return e
                }, e
            }
            var vt = l.c.div(xt()),
                gt = function (e) {
                    var n = Q(r.a.createElement(In, null)),
                        t = Object(u.a)(n, 1)[0],
                        i = Q(r.a.createElement(Ee, null), "provider"),
                        c = Object(u.a)(i, 1)[0],
                        o = Object(p.h)(),
                        s = o.account,
                        l = (o.connect, o.status, Object(a.useCallback)((function () {
                            c()
                        }), [c]));
                    return r.a.createElement(vt, null, s ? r.a.createElement(v, {
                        onClick: t,
                        size: "sm",
                        text: "My Wallet"
                    }) : r.a.createElement(v, {
                        onClick: l,
                        size: "sm",
                        text: "Unlock Wallet"
                    }))
                };

            function Et() {
                var e = Object(d.a)(["\n  color: ", ";\n  font-weight: 700;\n  padding-left: ", "px;\n  padding-right: ", "px;\n  text-decoration: none;\n  &:hover {\n    color: #4F7858;\n  }\n  &.active {\n    color: ", ";\n  }\n  @media (max-width: 400px) {\n    padding-left: ", "px;\n    padding-right: ", "px;\n  }\n"]);
                return Et = function () {
                    return e
                }, e
            }

            function wt() {
                var e = Object(d.a)(["\n  color: ", ";\n  font-weight: 700;\n  padding-left: ", "px;\n  padding-right: ", "px;\n  text-decoration: none;\n  &:hover {\n    color: #4F7858;\n  }\n  &.active {\n    color: ", ";\n  }\n  @media (max-width: 400px) {\n    padding-left: ", "px;\n    padding-right: ", "px;\n  }\n"]);
                return wt = function () {
                    return e
                }, e
            }

            function Ot() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  @media (max-width: 850px) {\n    display: none;\n  }\n"]);
                return Ot = function () {
                    return e
                }, e
            }
            var jt = l.c.nav(Ot()),
                kt = Object(l.c)(o.c)(wt(), (function (e) {
                    return e.theme.color.grey[400]
                }), (function (e) {
                    return e.theme.spacing[3]
                }), (function (e) {
                    return e.theme.spacing[3]
                }), (function (e) {
                    return e.theme.color.primary.main
                }), (function (e) {
                    return e.theme.spacing[2]
                }), (function (e) {
                    return e.theme.spacing[2]
                })),
                Tt = l.c.a(Et(), (function (e) {
                    return e.theme.color.grey[400]
                }), (function (e) {
                    return e.theme.spacing[3]
                }), (function (e) {
                    return e.theme.spacing[3]
                }), (function (e) {
                    return e.theme.color.primary.main
                }), (function (e) {
                    return e.theme.spacing[2]
                }), (function (e) {
                    return e.theme.spacing[2]
                })),
                Ct = function () {
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement(jt, null, r.a.createElement(kt, {
                        exact: !0,
                        activeClassName: "active",
                        to: "/farms"
                    }, "Farm"), r.a.createElement(kt, {
                        exact: !0,
                        activeClassName: "active",
                        to: "/staking"
                    }, "Staking"), r.a.createElement(Tt, {
                        href: "https://exchange.kittyexchange.finance",
                        target: "_blank"
                    }, "Exchange"), r.a.createElement(Tt, {
                        href: "https://docs.kittyexchange.finance",
                        target: "_blank"
                    }, "Docs"), r.a.createElement(Tt, {
                        href: "https://voting.kittyexchange.finance",
                        target: "_blank"
                    }, "Voting"), r.a.createElement(kt, {
                        exact: !0,
                        activeClassName: "active",
                        to: "/lottery"
                    }, "Lottery")))
                };

            function Bt() {
                var e = Object(d.a)(["\n  background: none;\n  border: 0;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  display: none;\n  @media (max-width: 400px) {\n    align-items: center;\n    display: flex;\n    height: 44px;\n    justify-content: center;\n    width: 44px;\n  }\n"]);
                return Bt = function () {
                    return e
                }, e
            }

            function At() {
                var e = Object(d.a)(["\n  @media (mim-width: 850px) {\n    display: none;\n  }\n  align-items: center;\n  display: flex;\n  justify-content: flex-end;\n  width: 0;\n  @media (max-width: 400px) {\n    justify-content: center;\n    width: auto;\n  }\n"]);
                return At = function () {
                    return e
                }, e
            }

            function St() {
                var e = Object(d.a)(["\n  @media (max-width: 850px) {\n    display: none;\n  }\n  align-items: center;\n  display: flex;\n  justify-content: flex-end;\n  width: 156px;\n  @media (max-width: 400px) {\n    justify-content: center;\n    width: auto;\n  }\n"]);
                return St = function () {
                    return e
                }, e
            }

            function Mt() {
                var e = Object(d.a)(["\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  @media (max-width: 400px) {\n    display: none;\n  }\n"]);
                return Mt = function () {
                    return e
                }, e
            }

            function Dt() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  height: ", "px;\n  justify-content: space-between;\n  max-width: ", "px;\n  width: 100%;\n"]);
                return Dt = function () {
                    return e
                }, e
            }

            function Ft() {
                var e = Object(d.a)([""]);
                return Ft = function () {
                    return e
                }, e
            }

            function Nt() {
                var e = Object(d.a)(["\n  width: 260px;\n  @media (max-width: 400px) {\n    width: auto;\n  }\n"]);
                return Nt = function () {
                    return e
                }, e
            }

            function _t() {
                var e = Object(d.a)(["\n  margin: 0 auto;\n  width: 110px;\n  text-align: center;\n  color: white;\n  font-size: 17px;\n  padding: 3px 3px 3px 3px;\n  font-weight: 700;\n  background: #47d3db;\n  border-radius: 20px;\n  display: nones;\n  display: none;\n  @media (max-width: 850px) {\n    display: block;\n  }\n"]);
                return _t = function () {
                    return e
                }, e
            }
            var It = l.c.div(_t()),
                Pt = l.c.div(Nt()),
                zt = l.c.div(Ft()),
                Lt = l.c.div(Dt(), (function (e) {
                    return e.theme.topBarSize
                }), (function (e) {
                    return e.theme.siteWidth
                })),
                Rt = (l.c.div(Mt()), l.c.div(St())),
                Kt = l.c.div(At()),
                Ut = (l.c.button(Bt()), function (e) {
                    var n = e.onPresentMobileMenu;
                    return r.a.createElement(zt, null, r.a.createElement(lt, {
                        size: "lg"
                    }, r.a.createElement(Lt, null, r.a.createElement(Pt, null, r.a.createElement(ht, null)), r.a.createElement(Ct, null), r.a.createElement(Rt, null, r.a.createElement(gt, null)), r.a.createElement(Kt, null, r.a.createElement(It, {
                        onClick: n
                    }, "Menu")))))
                }),
                Gt = Object(a.createContext)({
                    farms: [],
                    unharvested: 0
                }),
                Ht = function (e) {
                    var n = e.children,
                        t = Object(a.useState)(0),
                        i = Object(u.a)(t, 2),
                        c = i[0],
                        o = (i[1], sn()),
                        s = (Object(p.h)().account, mn(o));
                    return r.a.createElement(Gt.Provider, {
                        value: {
                            farms: s,
                            unharvested: c
                        }
                    }, n)
                },
                Wt = Object(a.createContext)({
                    transactions: {},
                    onAddTransaction: function (e) {}
                }),
                Vt = t(45),
                Xt = t(30),
                Jt = function (e) {
                    return {
                        type: "SET_TRANSACTIONS",
                        transactions: e
                    }
                },
                Yt = {
                    initialized: !1,
                    transactions: {}
                },
                qt = function (e, n) {
                    switch (n.type) {
                        case "ADD_TRANSACTION":
                            return Object(Xt.a)({}, e, {
                                transactions: Object(Xt.a)({}, e.transactions, Object(Vt.a)({}, n.transaction.hash, n.transaction))
                            });
                        case "RECEIVE_TX_RECEIPT":
                            return Object(Xt.a)({}, e, {
                                transactions: Object(Xt.a)({}, e.transactions, Object(Vt.a)({}, n.txHash, Object(Xt.a)({}, e.transactions[n.txHash], {
                                    receipt: n.receipt
                                })))
                            });
                        case "SET_TRANSACTIONS":
                            return Object(Xt.a)({}, e, {
                                transactions: n.transactions,
                                initialized: !0
                            });
                        default:
                            return e
                    }
                },
                $t = function (e) {
                    var n = e.children,
                        t = Object(a.useReducer)(qt, Yt),
                        i = Object(u.a)(t, 2),
                        c = i[0],
                        o = c.initialized,
                        s = c.transactions,
                        l = i[1],
                        p = Object(a.useCallback)((function (e) {
                            l({
                                type: "ADD_TRANSACTION",
                                transaction: e
                            })
                        }), [l]),
                        d = Object(a.useCallback)(Object(je.a)(Oe.a.mark((function e() {
                            var n, t;
                            return Oe.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        try {
                                            n = localStorage.getItem("transactions"), t = JSON.parse(n) || {}, l(Jt(t))
                                        } catch (a) {
                                            console.log(a)
                                        }
                                        case 1:
                                        case "end":
                                            return e.stop()
                                }
                            }), e)
                        }))), [l]);
                    return Object(a.useEffect)((function () {
                        o && localStorage.setItem("transactions", JSON.stringify(s))
                    }), [o, s]), Object(a.useEffect)((function () {
                        d()
                    }), [d]), r.a.createElement(Wt.Provider, {
                        value: {
                            transactions: s,
                            onAddTransaction: p
                        }
                    }, n)
                },
                Qt = {
                    borderRadius: 12,
                    breakpoints: {
                        mobile: 580
                    },
                    color: {
                        black: "#000",
                        grey: {
                            100: "#167e86",
                            200: "#25beca",
                            300: "#FFFDFA",
                            400: "#12AAB5",
                            500: "#805e49",
                            600: "#4F7858",
                            800: "#2d1e12"
                        },
                        blue: {
                            100: "#B9C9BC"
                        },
                        primary: {
                            light: "#ffc2a8",
                            main: "#4F7858"
                        },
                        secondary: {
                            main: "##00d1810"
                        },
                        white: "#FFF"
                    },
                    siteWidth: 1200,
                    spacing: {
                        1: 4,
                        2: 8,
                        3: 16,
                        4: 24,
                        5: 32,
                        6: 48,
                        7: 64
                    },
                    topBarSize: 72
                };

            function Zt() {
                var e = Object(d.a)(["\n  color: ", ";\n  padding-left: ", "px;\n  padding-right: ", "px;\n  text-decoration: none;\n  &:hover {\n    color: ", ";\n  }\n"]);
                return Zt = function () {
                    return e
                }, e
            }

            function ea() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n"]);
                return ea = function () {
                    return e
                }, e
            }
            var na = l.c.nav(ea()),
                ta = l.c.a(Zt(), (function (e) {
                    return e.theme.color.grey[400]
                }), (function (e) {
                    return e.theme.spacing[3]
                }), (function (e) {
                    return e.theme.spacing[3]
                }), (function (e) {
                    return e.theme.color.grey[500]
                })),
                aa = function () {
                    return r.a.createElement(na, null, r.a.createElement(ta, {
                        target: "_blank",
                        href: "https://t.me/KittyExchange"
                    }, "Telegram"), r.a.createElement(ta, {
                        target: "_blank",
                        href: "https://medium.com/@kittyexchange"
                    }, "Blog"), r.a.createElement(ta, {
                        target: "_blank",
                        href: "https://github.com/kittyexchange"
                    }, "Github"), r.a.createElement(ta, {
                        target: "_blank",
                        href: "https://twitter.com/kittyexchange"
                    }, "Twitter"), r.a.createElement(ta, {
                        href: "https://docs.kittyexchange.finance",
                        target: "_blank"
                    }, "Docs"))
                };

            function ra() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  height: ", "px;\n  max-width: ", "px;\n  width: 100%;\n"]);
                return ra = function () {
                    return e
                }, e
            }

            function ia() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  @media (max-width: 500px) {\n    display: none;\n  }\n"]);
                return ia = function () {
                    return e
                }, e
            }
            var ca = l.c.footer(ia()),
                ua = l.c.div(ra(), (function (e) {
                    return e.theme.topBarSize
                }), (function (e) {
                    return e.theme.siteWidth
                })),
                oa = function () {
                    return r.a.createElement(ca, null, r.a.createElement(ua, null, r.a.createElement(aa, null)))
                };

            function sa() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 145px);\n  @media (max-width: 500px) {\n    width: 100vw;\n  }\n"]);
                return sa = function () {
                    return e
                }, e
            }

            function la() {
                var e = Object(d.a)(["\n\n"]);
                return la = function () {
                    return e
                }, e
            }
            var pa = l.c.div(la()),
                da = l.c.div(sa()),
                ma = function (e) {
                    var n = e.children;
                    return r.a.createElement(pa, null, r.a.createElement(da, null, n), r.a.createElement(oa, null))
                },
                fa = function (e) {
                    return Object(a.useContext)(Gt).farms.find((function (n) {
                        return n.id === e
                    }))
                },
                ya = function (e) {
                    var n = Object(p.h)().account;
                    return {
                        onRedeem: Object(a.useCallback)(Object(je.a)(Oe.a.mark((function t() {
                            var a;
                            return Oe.a.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, On(e, n);
                                    case 2:
                                        return a = t.sent, console.log(a), t.abrupt("return", a);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), [n, e])
                    }
                },
                ba = function (e) {
                    var n = Object(a.useState)(new Te.a(0)),
                        t = Object(u.a)(n, 2),
                        r = t[0],
                        i = t[1],
                        c = Object(p.h)(),
                        o = c.account,
                        s = (c.ethereum, sn()),
                        l = dn(s),
                        d = _e(),
                        m = Object(a.useCallback)(Object(je.a)(Oe.a.mark((function n() {
                            var t;
                            return Oe.a.wrap((function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, yn(l, e, o);
                                    case 2:
                                        t = n.sent, i(new Te.a(t));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        }))), [o, l, s]);
                    return Object(a.useEffect)((function () {
                        o && l && s && m()
                    }), [o, d, l, i, s]), r
                },
                ha = function (e) {
                    var n = Object(p.h)().account,
                        t = sn(),
                        r = dn(t);
                    return {
                        onReward: Object(a.useCallback)(Object(je.a)(Oe.a.mark((function t() {
                            var a;
                            return Oe.a.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, En(r, e, n);
                                    case 2:
                                        return a = t.sent, console.log(a), t.abrupt("return", a);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), [n, e, t])
                    }
                };

            function xa() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]);
                return xa = function () {
                    return e
                }, e
            }

            function va() {
                var e = Object(d.a)(["\n  height: ", "px;\n  width: ", "px;\n"]);
                return va = function () {
                    return e
                }, e
            }

            function ga() {
                var e = Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ", "px;\n  width: 100%;\n"]);
                return ga = function () {
                    return e
                }, e
            }

            function Ea() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]);
                return Ea = function () {
                    return e
                }, e
            }
            var wa = l.c.div(Ea()),
                Oa = l.c.div(ga(), (function (e) {
                    return e.theme.spacing[6]
                })),
                ja = (l.c.div(va(), (function (e) {
                    return e.theme.spacing[4]
                }), (function (e) {
                    return e.theme.spacing[4]
                })), l.c.div(xa())),
                ka = function (e) {
                    var n = e.pid,
                        t = ba(n),
                        i = Object(a.useState)(!1),
                        c = Object(u.a)(i, 2),
                        o = c[0],
                        s = c[1],
                        l = ha(n).onReward;
                    return r.a.createElement(se, null, r.a.createElement(de, null, r.a.createElement(ja, null, r.a.createElement(wa, null, r.a.createElement(w, null, "\ud83e\udd5e"), r.a.createElement(Mn, {
                        value: Ce(t)
                    }), r.a.createElement(Tn, {
                        text: "Meow Earned"
                    })), r.a.createElement(Oa, null, r.a.createElement(v, {
                        disabled: !t.toNumber() || o,
                        text: o ? "Collecting MEOW" : "Harvest",
                        onClick: Object(je.a)(Oe.a.mark((function e() {
                            return Oe.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return s(!0), e.next = 3, l();
                                    case 3:
                                        s(!1);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    })))))
                };

            function Ta() {
                var e = Object(d.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ", "px;\n  padding: 0 ", "px;\n  text-decoration: none;\n"]);
                return Ta = function () {
                    return e
                }, e
            }

            function Ca() {
                var e = Object(d.a)(["\n  align-items: center;\n  background-color: ", ";\n  border: 0;\n  border-radius: 28px;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  font-weight: 700;\n  height: 56px;\n  justify-content: center;\n  letter-spacing: 1px;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  pointer-events: ", ";\n  text-transform: uppercase;\n  width: 56px;\n  &:hover {\n    background-color: ", ";\n  }\n"]);
                return Ca = function () {
                    return e
                }, e
            }
            var Ba = l.c.button(Ca(), (function (e) {
                    return e.theme.color.grey[200]
                }), (function (e) {
                    return e.disabled ? e.theme.color.grey[400] : "#fff"
                }), (function (e) {
                    return e.disabled ? "none" : void 0
                }), (function (e) {
                    return e.theme.color.grey[100]
                })),
                Aa = Object(l.c)(o.b)(Ta(), (function (e) {
                    return -e.theme.spacing[4]
                }), (function (e) {
                    return e.theme.spacing[4]
                })),
                Sa = function (e) {
                    var n = e.children,
                        t = e.disabled,
                        a = e.onClick,
                        i = e.to;
                    return r.a.createElement(Ba, {
                        disabled: t,
                        onClick: a
                    }, i ? r.a.createElement(Aa, {
                        to: i
                    }, n) : n)
                },
                Ma = function (e) {
                    var n = e.color,
                        t = e.size,
                        i = void 0 === t ? 24 : t,
                        c = Object(a.useContext)(l.a).color;
                    return r.a.createElement("svg", {
                        height: i,
                        viewBox: "0 0 24 24",
                        width: i
                    }, r.a.createElement("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), r.a.createElement("path", {
                        d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
                        fill: n || c.grey[400]
                    }))
                },
                Da = function (e) {
                    var n = Object(a.useState)(new Te.a(0)),
                        t = Object(u.a)(n, 2),
                        r = t[0],
                        i = t[1],
                        c = Object(p.h)().account,
                        o = sn(),
                        s = dn(o),
                        l = Object(a.useCallback)(Object(je.a)(Oe.a.mark((function n() {
                            var t;
                            return Oe.a.wrap((function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, Fe(e, s, c);
                                    case 2:
                                        t = n.sent, i(new Te.a(t));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        }))), [c, s, e]);
                    return Object(a.useEffect)((function () {
                        c && s && e && l();
                        var n = setInterval(l, 1e4);
                        return function () {
                            return clearInterval(n)
                        }
                    }), [c, s, e]), r
                },
                Fa = function (e) {
                    var n = Object(p.h)().account,
                        t = sn(),
                        r = dn(t);
                    return {
                        onApprove: Object(a.useCallback)(Object(je.a)(Oe.a.mark((function t() {
                            var a;
                            return Oe.a.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, hn(e, r, n);
                                    case 3:
                                        return a = t.sent, t.abrupt("return", a);
                                    case 7:
                                        return t.prev = 7, t.t0 = t.catch(0), t.abrupt("return", !1);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 7]
                            ])
                        }))), [n, e, r])
                    }
                },
                Na = function (e) {
                    var n = Object(p.h)().account,
                        t = sn();
                    return {
                        onStake: Object(a.useCallback)(function () {
                            var a = Object(je.a)(Oe.a.mark((function a(r) {
                                var i;
                                return Oe.a.wrap((function (a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.next = 2, vn(dn(t), e, r, n);
                                        case 2:
                                            i = a.sent, console.log(i);
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })));
                            return function (e) {
                                return a.apply(this, arguments)
                            }
                        }(), [n, e, t])
                    }
                },
                _a = function (e) {
                    var n = Object(a.useState)(new Te.a(0)),
                        t = Object(u.a)(n, 2),
                        r = t[0],
                        i = t[1],
                        c = Object(p.h)().account,
                        o = sn(),
                        s = dn(o),
                        l = _e(),
                        d = Object(a.useCallback)(Object(je.a)(Oe.a.mark((function n() {
                            var t;
                            return Oe.a.wrap((function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, wn(s, e, c);
                                    case 2:
                                        t = n.sent, i(new Te.a(t));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        }))), [c, e, o]);
                    return Object(a.useEffect)((function () {
                        c && o && d()
                    }), [c, e, i, l, o]), r
                },
                Ia = function (e) {
                    var n = Object(p.h)().account,
                        t = sn(),
                        r = dn(t);
                    return {
                        onUnstake: Object(a.useCallback)(function () {
                            var t = Object(je.a)(Oe.a.mark((function t(a) {
                                var i;
                                return Oe.a.wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, gn(r, e, a, n);
                                        case 2:
                                            i = t.sent, console.log(i);
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }(), [n, e, t])
                    }
                };

            function Pa() {
                var e = Object(d.a)(["\n  background: none;\n  border: 0;\n  color: ", ";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"]);
                return Pa = function () {
                    return e
                }, e
            }

            function za() {
                var e = Object(d.a)(["\n  align-items: center;\n  background-color: #FFF9F0;\n  border-radius: ", "px;\n  display: flex;\n  height: 72px;\n  padding: 0 ", "px;\n"]);
                return za = function () {
                    return e
                }, e
            }
            var La = l.c.div(za(), (function (e) {
                    return e.theme.borderRadius
                }), (function (e) {
                    return e.theme.spacing[3]
                })),
                Ra = l.c.input(Pa(), (function (e) {
                    return e.theme.color.grey[600]
                })),
                Ka = function (e) {
                    var n = e.endAdornment,
                        t = e.onChange,
                        a = e.placeholder,
                        i = e.startAdornment,
                        c = e.value;
                    return r.a.createElement(La, null, !!i && i, r.a.createElement(Ra, {
                        placeholder: a,
                        value: c,
                        onChange: t
                    }), !!n && n)
                };

            function Ua() {
                var e = Object(d.a)(["\n  color: ", ";\n  font-weight: 700;\n"]);
                return Ua = function () {
                    return e
                }, e
            }

            function Ga() {
                var e = Object(d.a)(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"]);
                return Ga = function () {
                    return e
                }, e
            }

            function Ha() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n"]);
                return Ha = function () {
                    return e
                }, e
            }

            function Wa() {
                var e = Object(d.a)(["\n  width: ", "px;\n"]);
                return Wa = function () {
                    return e
                }, e
            }

            function Va() {
                var e = Object(d.a)(["\n\n"]);
                return Va = function () {
                    return e
                }, e
            }
            var Xa = l.c.div(Va()),
                Ja = l.c.div(Wa(), (function (e) {
                    return e.theme.spacing[3]
                })),
                Ya = l.c.div(Ha()),
                qa = l.c.div(Ga(), (function (e) {
                    return e.theme.color.grey[400]
                })),
                $a = l.c.span(Ua(), (function (e) {
                    return e.theme.color.grey[600]
                })),
                Qa = function (e) {
                    var n = e.max,
                        t = e.symbol,
                        a = e.onChange,
                        i = e.onSelectMax,
                        c = e.value;
                    return r.a.createElement(Xa, null, r.a.createElement(qa, null, n.toLocaleString(), " ", t, " Available"), r.a.createElement(Ka, {
                        endAdornment: r.a.createElement(Ya, null, r.a.createElement($a, null, t), r.a.createElement(Ja, null), r.a.createElement("div", null, r.a.createElement(v, {
                            size: "sm",
                            text: "Max",
                            onClick: i
                        }))),
                        onChange: a,
                        placeholder: "0",
                        value: c
                    }))
                },
                Za = function (e) {
                    var n = e.max,
                        t = e.onConfirm,
                        i = e.onDismiss,
                        c = e.tokenName,
                        o = void 0 === c ? "" : c,
                        s = Object(a.useState)(""),
                        l = Object(u.a)(s, 2),
                        p = l[0],
                        d = l[1],
                        m = Object(a.useState)(!1),
                        f = Object(u.a)(m, 2),
                        y = f[0],
                        b = f[1],
                        h = Object(a.useMemo)((function () {
                            return Be(n)
                        }), [n]),
                        x = Object(a.useCallback)((function (e) {
                            d(e.currentTarget.value)
                        }), [d]),
                        g = Object(a.useCallback)((function () {
                            d(h)
                        }), [h, d]);
                    return r.a.createElement(S, null, r.a.createElement(H, {
                        text: "Deposit ".concat(o, " Tokens")
                    }), r.a.createElement(Qa, {
                        value: p,
                        onSelectMax: g,
                        onChange: x,
                        max: h,
                        symbol: o
                    }), r.a.createElement(z, null, r.a.createElement(v, {
                        text: "Cancel",
                        variant: "secondary",
                        onClick: i
                    }), r.a.createElement(v, {
                        disabled: y,
                        text: y ? "Pending Confirmation" : "Confirm",
                        onClick: Object(je.a)(Oe.a.mark((function e() {
                            return Oe.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return b(!0), e.next = 3, t(p);
                                    case 3:
                                        b(!1), i();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    })))
                },
                er = function (e) {
                    var n = e.onConfirm,
                        t = e.onDismiss,
                        i = e.max,
                        c = e.tokenName,
                        o = void 0 === c ? "" : c,
                        s = Object(a.useState)(""),
                        l = Object(u.a)(s, 2),
                        p = l[0],
                        d = l[1],
                        m = Object(a.useState)(!1),
                        f = Object(u.a)(m, 2),
                        y = f[0],
                        b = f[1],
                        h = Object(a.useMemo)((function () {
                            return Be(i)
                        }), [i]),
                        x = Object(a.useCallback)((function (e) {
                            d(e.currentTarget.value)
                        }), [d]),
                        g = Object(a.useCallback)((function () {
                            d(h)
                        }), [h, d]);
                    return r.a.createElement(S, null, r.a.createElement(H, {
                        text: "Withdraw ".concat(o)
                    }), r.a.createElement(Qa, {
                        onSelectMax: g,
                        onChange: x,
                        value: p,
                        max: h,
                        symbol: o
                    }), r.a.createElement(z, null, r.a.createElement(v, {
                        text: "Cancel",
                        variant: "secondary",
                        onClick: t
                    }), r.a.createElement(v, {
                        disabled: y,
                        text: y ? "Pending Confirmation" : "Confirm",
                        onClick: Object(je.a)(Oe.a.mark((function e() {
                            return Oe.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return b(!0), e.next = 3, n(p);
                                    case 3:
                                        b(!1), t();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    })))
                };

            function nr() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]);
                return nr = function () {
                    return e
                }, e
            }

            function tr() {
                var e = Object(d.a)(["\n  height: ", "px;\n  width: ", "px;\n"]);
                return tr = function () {
                    return e
                }, e
            }

            function ar() {
                var e = Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ", "px;\n  width: 100%;\n"]);
                return ar = function () {
                    return e
                }, e
            }

            function rr() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]);
                return rr = function () {
                    return e
                }, e
            }
            var ir = l.c.div(rr()),
                cr = l.c.div(ar(), (function (e) {
                    return e.theme.spacing[6]
                })),
                ur = l.c.div(tr(), (function (e) {
                    return e.theme.spacing[4]
                }), (function (e) {
                    return e.theme.spacing[4]
                })),
                or = l.c.div(nr()),
                sr = function (e) {
                    var n = e.lpContract,
                        t = e.pid,
                        i = e.tokenName,
                        c = Object(a.useState)(!1),
                        o = Object(u.a)(c, 2),
                        s = o[0],
                        l = o[1],
                        d = Object(p.h)().account,
                        m = Da(n),
                        f = Fa(n).onApprove,
                        y = Pe(n.options.address),
                        b = _a(t);
                    console.log(t);
                    var h = Na(t).onStake,
                        x = Ia(t).onUnstake,
                        g = Q(r.a.createElement(Za, {
                            max: y,
                            onConfirm: h,
                            tokenName: i
                        })),
                        E = Object(u.a)(g, 1)[0],
                        O = Q(r.a.createElement(er, {
                            max: b,
                            onConfirm: x,
                            tokenName: i
                        })),
                        j = Object(u.a)(O, 1)[0],
                        k = Object(a.useCallback)(Object(je.a)(Oe.a.mark((function e() {
                            return Oe.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, l(!0), e.next = 4, f();
                                    case 4:
                                        e.sent || l(!1), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.log(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        }))), [f, l]),
                        T = Q(r.a.createElement(In, null)),
                        C = (Object(u.a)(T, 1)[0], Q(r.a.createElement(Ee, null), "provider")),
                        B = Object(u.a)(C, 1)[0],
                        A = Object(a.useCallback)((function () {
                            B()
                        }), [B]);
                    return r.a.createElement(se, null, r.a.createElement(de, null, r.a.createElement(or, null, r.a.createElement(ir, null, r.a.createElement(w, null, "\u26cf\ud83d\udc30"), r.a.createElement(Mn, {
                        value: Ce(b)
                    }), r.a.createElement(Tn, {
                        text: "".concat(i, " Tokens Staked")
                    })), r.a.createElement(cr, null, !d && r.a.createElement(v, {
                        onClick: A,
                        size: "md",
                        text: "Unlock Wallet"
                    }), d && (m.toNumber() ? r.a.createElement(r.a.Fragment, null, r.a.createElement(v, {
                        disabled: b.eq(new Te.a(0)),
                        text: "Unstake",
                        onClick: j
                    }), r.a.createElement(ur, null), r.a.createElement(Sa, {
                        onClick: E
                    }, r.a.createElement(Ma, null))) : r.a.createElement(v, {
                        disabled: s,
                        onClick: k,
                        text: "Approve ".concat(i)
                    }))))))
                };

            function lr() {
                var e = Object(d.a)(["\n  color: ", ";\n  font-size: 16px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n"]);
                return lr = function () {
                    return e
                }, e
            }

            function pr() {
                var e = Object(d.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]);
                return pr = function () {
                    return e
                }, e
            }

            function dr() {
                var e = Object(d.a)(["\n  display: flex;\n  width: 600px;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]);
                return dr = function () {
                    return e
                }, e
            }

            function mr() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);
                return mr = function () {
                    return e
                }, e
            }

            function fr() {
                var e = Object(d.a)(["\n  color:#B9C9BC;\n  font-size:29px;\n  width: 50vw;\n  text-align: center;\n  font-weight: 900;\n  margin: 50px;\n"]);
                return fr = function () {
                    return e
                }, e
            }

            function yr() {
                var e = Object(d.a)(["\n  width: 160px;\n  margin-top: 30px;\n"]);
                return yr = function () {
                    return e
                }, e
            }
            var br = l.c.img(yr()),
                hr = l.c.div(fr()),
                xr = l.c.div(mr()),
                vr = l.c.div(dr()),
                gr = l.c.div(pr()),
                Er = l.c.h3(lr(), (function (e) {
                    return e.theme.color.grey[400]
                })),
                wr = function () {
                    var e = Object(s.f)().farmId;
                    console.log(e);
                    var n = fa(e) || {
                            pid: 0,
                            lpToken: "",
                            lpTokenAddress: "",
                            tokenAddress: "",
                            earnToken: "",
                            name: "",
                            icon: "",
                            tokenSymbol: ""
                        },
                        i = n.pid,
                        c = n.lpToken,
                        u = n.lpTokenAddress,
                        o = (n.tokenAddress, n.earnToken),
                        l = (n.name, n.icon, n.tokenSymbol);
                    Object(a.useEffect)((function () {
                        window.scrollTo(0, 0)
                    }), []);
                    var d = sn(),
                        m = Object(p.h)().ethereum,
                        f = Object(a.useMemo)((function () {
                            return De(m, u)
                        }), [m, u]);
                    ya(dn(d)).onRedeem, Object(a.useMemo)((function () {
                        return c.toUpperCase()
                    }), [c]), Object(a.useMemo)((function () {
                        return o.toUpperCase()
                    }), [o]);
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement(br, {
                        src: t(127)("./category-".concat(l.toLocaleLowerCase() || "cake", ".png"))
                    }), r.a.createElement(hr, null, "Stake FLIP tokens to stack MEOW"), r.a.createElement(xr, null, r.a.createElement(vr, null, r.a.createElement(gr, null, r.a.createElement(ka, {
                        pid: i
                    })), r.a.createElement(F, null), r.a.createElement(gr, null, r.a.createElement(sr, {
                        lpContract: f,
                        pid: i,
                        tokenName: c.toUpperCase()
                    }))), r.a.createElement(F, {
                        size: "lg"
                    }), r.a.createElement(Er, null, "\u2b50\ufe0f Every time you stake and unstake FLIP tokens, the contract will automagically harvest MEOW rewards for you!"), r.a.createElement(F, {
                        size: "lg"
                    })))
                },
                Or = t(59),
                jr = (t(230), function () {
                    return [Object(a.useContext)(Gt).farms]
                }),
                kr = function () {
                    var e = Object(a.useState)([]),
                        n = Object(u.a)(e, 2),
                        t = n[0],
                        r = n[1],
                        i = Object(p.h)().account,
                        c = sn(),
                        o = mn(c),
                        s = dn(c),
                        l = function (e) {
                            return e && e.contracts && e.contracts.weth
                        }(c),
                        d = _e(),
                        m = Object(a.useCallback)(Object(je.a)(Oe.a.mark((function e() {
                            var n;
                            return Oe.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Promise.all(o.map((function (e) {
                                            var n = e.pid,
                                                t = e.lpContract,
                                                a = e.tokenContract;
                                            return bn(s, l, t, a, n)
                                        })));
                                    case 2:
                                        n = e.sent, r(n);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [i, s, c]);
                    return Object(a.useEffect)((function () {
                        i && s && c && m()
                    }), [i, d, s, r, c]), t
                },
                Tr = function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
                    return e.dividedBy(new Te.a(10).pow(n)).toNumber()
                };

            function Cr() {
                var e = Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n  border-radius: 8px;\n  background: #fffdfa;\n  color: #aa9584;\n  width: 100%;\n  margin-top: 12px;\n  line-height: 32px;\n  font-size: 13px;\n  border: 1px solid #e6dcd5;\n  text-align: center;\n  padding: 0 12px;\n"]);
                return Cr = function () {
                    return e
                }, e
            }

            function Br() {
                var e = Object(d.a)(["\n  color: ", ";\n"]);
                return Br = function () {
                    return e
                }, e
            }

            function Ar() {
                var e = Object(d.a)(["\n  margin-top: ", "px;\n  text-align: center;\n"]);
                return Ar = function () {
                    return e
                }, e
            }

            function Sr() {
                var e = Object(d.a)(["\n  height: ", "px;\n  width: ", "px;\n"]);
                return Sr = function () {
                    return e
                }, e
            }

            function Mr() {
                var e = Object(d.a)(["\n  height: ", "px;\n  width: ", "px;\n"]);
                return Mr = function () {
                    return e
                }, e
            }

            function Dr() {
                var e = Object(d.a)(["\n  position: absolute;\n  line-height: 25px;\n  padding: 0 12px;\n  background: #7645da;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 900;\n  left: 20px;\n  top: 20px;\n"]);
                return Dr = function () {
                    return e
                }, e
            }

            function Fr() {
                var e = Object(d.a)(["\n  position: relative;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]);
                return Fr = function () {
                    return e
                }, e
            }

            function Nr() {
                var e = Object(d.a)(["\n  color: ", ";\n  font-size: 24px;\n  font-weight: 700;\n  margin: ", "px 0 0;\n  padding: 0;\n"]);
                return Nr = function () {
                    return e
                }, e
            }

            function _r() {
                var e = Object(d.a)(["\n  display: flex;\n  width: calc((900px - ", "px * 2) / 3);\n  position: relative;\n"]);
                return _r = function () {
                    return e
                }, e
            }

            function Ir() {
                var e = Object(d.a)(["\n  display: flex;\n  margin-bottom: ", "px;\n  flex-flow: row wrap;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]);
                return Ir = function () {
                    return e
                }, e
            }

            function Pr() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n"]);
                return Pr = function () {
                    return e
                }, e
            }

            function zr() {
                var e = Object(d.a)(["\n  width: 900px;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);
                return zr = function () {
                    return e
                }, e
            }

            function Lr() {
                var e = Object(d.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: ", " 2s linear infinite;\n  border-radius: 12px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"]);
                return Lr = function () {
                    return e
                }, e
            }

            function Rr() {
                var e = Object(d.a)(["\n\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]);
                return Rr = function () {
                    return e
                }, e
            }

            function Kr() {
                var e = Object(d.a)(["\n  text-decoration: none;\n  font-weight: 900;\n  color: #8953ec;\n"]);
                return Kr = function () {
                    return e
                }, e
            }

            function Ur() {
                var e = Object(d.a)(["\n  position: relative;\n  background: rgb(240, 233, 231);\n  background: #FFFDFA;\n  box-shadow: 0px 2px 10px rgba(171, 133, 115, 0.16);\n  border-radius: 20px;\n  height: 309px;\n  padding: 20px;\n  justify-content: center;\n  flex-direction:column;\n  justify-content:space-around;\n  display: flex;\n  width: 240px;\n  text-align: center;\n  margin: 6px;\n  img {\n    height: 80px;\n    width: 80px;\n  }\n  @media (max-width: 500px) {\n    margin: 10px;\n  }\n\n"]);
                return Ur = function () {
                    return e
                }, e
            }

            function Gr() {
                var e = Object(d.a)(["\nline-height: 1.5rem;\ncolor: #B9C9BC;\n  >span {\n    float: left;\n  }\n  .right {\n    float: right;\n    color: #4F7858;\n    font-weight: 900;\n  }\n"]);
                return Gr = function () {
                    return e
                }, e
            }

            function Hr() {
                var e = Object(d.a)(["\n  text-align: center;\n"]);
                return Hr = function () {
                    return e
                }, e
            }

            function Wr() {
                var e = Object(d.a)(["\n  display: flex;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  @media (max-width: 500px) {\n    justify-content: center;\n  }\n"]);
                return Wr = function () {
                    return e
                }, e
            }
            var Vr = l.c.div(Wr()),
                Xr = l.c.div(Hr()),
                Jr = l.c.div(Gr()),
                Yr = l.c.div(Ur()),
                qr = function (e) {
                    var n = e.farm,
                        i = (e.stakedValue, Ie("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", n.lpTokenAddress) * function () {
                            var e = Object(a.useState)(0),
                                n = Object(u.a)(e, 2),
                                t = n[0],
                                r = n[1],
                                i = Object(p.h)(),
                                c = i.account,
                                o = i.ethereum,
                                s = _e(),
                                l = Object(a.useCallback)(Object(je.a)(Oe.a.mark((function e() {
                                    var n, t;
                                    return Oe.a.wrap((function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Ne(o, "0xe9e7cea3dedca5984780bafc599bd69add087d56", "0x1B96B92314C44b159149f7E0303511fB2Fc4774f");
                                            case 2:
                                                return n = e.sent, e.next = 5, Ne(o, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "0x1B96B92314C44b159149f7E0303511fB2Fc4774f");
                                            case 5:
                                                t = e.sent, r(Ce(new Te.a(n)) / Ce(new Te.a(t)));
                                            case 7:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), [c, o]);
                            return Object(a.useEffect)((function () {
                                c && o && l()
                            }), [c, o, r, s]), t
                        }() * 2),
                        c = Object(a.useState)(1600783200),
                        o = Object(u.a)(c, 2),
                        s = (o[0], o[1], Object(a.useState)(0)),
                        l = Object(u.a)(s, 2),
                        d = (l[0], l[1]),
                        m = Object(p.h)().account,
                        f = n.lpTokenAddress,
                        y = sn();
                    Object(a.useEffect)((function () {
                        function e() {
                            return (e = Object(je.a)(Oe.a.mark((function e() {
                                var n;
                                return Oe.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!y) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, yn(dn(y), f, m);
                                        case 4:
                                            n = e.sent, d(Tr(n));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }
                        y && m && function () {
                            e.apply(this, arguments)
                        }()
                    }), [y, f, m, d]);
                    return r.a.createElement(ai, null, "MEOW" === n.tokenSymbol && r.a.createElement(Zr, null), r.a.createElement(ri, null, r.a.createElement(Yr, null, r.a.createElement(Xr, null, r.a.createElement(ii, null, n.multiplier), r.a.createElement("img", {
                        src: t(127)("./category-".concat(n.tokenSymbol.toLocaleLowerCase(), ".png")),
                        alt: ""
                    })), r.a.createElement(Jr, null, r.a.createElement("span", null, "Deposit"), r.a.createElement("span", {
                        className: "right"
                    }, n.lpToken.toUpperCase().replace("PANCAKE", ""))), r.a.createElement(Jr, null, r.a.createElement("span", null, "Earn"), r.a.createElement("span", {
                        className: "right"
                    }, "MEOW")), r.a.createElement(Jr, null, r.a.createElement("span", null, "APY"), r.a.createElement("span", {
                        className: "right"
                    }, n.apy ? "".concat(n.apy.times(new Te.a(100)).toNumber().toLocaleString("en-US").slice(0, -1), "%") : "Loading ...")), r.a.createElement(v, {
                        disabled: !1,
                        text: "Select",
                        to: "/farms/".concat(n.id)
                    }, !1), r.a.createElement(ui, null), r.a.createElement(Jr, null, r.a.createElement("span", null, "Total Liquidity"), r.a.createElement("span", {
                        className: "right"
                    }, "BAKE-BNB Bakery LP" !== n.lpToken ? "$".concat(parseInt(i).toLocaleString()) : "-")), r.a.createElement($r, {
                        href: "https://bscscan.com/address/".concat(n.lpTokenAddress),
                        target: "_blank"
                    }, "View on BscScan >"))))
                },
                $r = l.c.a(Kr()),
                Qr = Object(l.d)(Rr()),
                Zr = l.c.div(Lr(), Qr),
                ei = l.c.div(zr()),
                ni = l.c.div(Pr()),
                ti = l.c.div(Ir(), (function (e) {
                    return e.theme.spacing[4]
                })),
                ai = l.c.div(_r(), (function (e) {
                    return e.theme.spacing[4]
                })),
                ri = (l.c.h4(Nr(), (function (e) {
                    return e.theme.color.grey[600]
                }), (function (e) {
                    return e.theme.spacing[2]
                })), l.c.div(Fr())),
                ii = l.c.div(Dr()),
                ci = l.c.div(Mr(), (function (e) {
                    return e.theme.spacing[4]
                }), (function (e) {
                    return e.theme.spacing[4]
                })),
                ui = l.c.div(Sr(), (function (e) {
                    return e.theme.spacing[1]
                }), (function (e) {
                    return e.theme.spacing[1]
                })),
                oi = (l.c.div(Ar(), (function (e) {
                    return e.theme.spacing[2]
                })), l.c.div(Br(), (function (e) {
                    return e.theme.color.grey[500]
                })), l.c.div(Cr()), function () {
                    var e = jr(),
                        n = Object(u.a)(e, 1)[0],
                        i = (Object(p.h)().account, kr()),
                        c = n.findIndex((function (e) {
                            return "MEOW" === e.tokenSymbol
                        })),
                        o = c >= 0 && i[c] ? i[c].tokenPriceInWeth : new Te.a(0),
                        s = new Te.a(10512e3),
                        l = new Te.a(40),
                        d = Q(r.a.createElement(In, null)),
                        m = (Object(u.a)(d, 1)[0], Q(r.a.createElement(Ee, null), "provider")),
                        f = Object(u.a)(m, 1)[0],
                        y = Object(a.useCallback)((function () {
                            f()
                        }), [f]),
                        b = n.filter((function (e) {
                            return 0 !== e.pid
                        })),
                        h = i.slice(1),
                        x = b.reduce((function (e, n, t) {
                            var a = Object(Xt.a)({}, n, {}, h[t], {
                                    apy: h[t] ? o.times(l).times(s).times(h[t].poolWeight).div(h[t].totalWethValue) : null
                                }),
                                r = Object(Or.a)(e);
                            return 3 === r[r.length - 1].length ? r.push([a]) : r[r.length - 1].push(a), r
                        }), [
                            []
                        ]);
                    return r.a.createElement(ei, null, x[0].length ? x.map((function (e, n) {
                        return r.a.createElement(ti, {
                            key: n
                        }, e.map((function (e, n) {
                            return r.a.createElement(r.a.Fragment, {
                                key: n
                            }, r.a.createElement(qr, {
                                farm: e,
                                stakedValue: h[n]
                            }), (0 === n || 1 === n) && r.a.createElement(ci, null))
                        })))
                    })) : r.a.createElement(ni, null, r.a.createElement(Vr, null, Ze.map((function (e, n) {
                        return r.a.createElement(Yr, {
                            key: n
                        }, r.a.createElement(Xr, null, r.a.createElement(ii, null, e.multiplier), r.a.createElement("img", {
                            src: t(127)("./category-".concat(e.tokenSymbol.toLocaleLowerCase(), ".png")),
                            alt: ""
                        })), r.a.createElement(Jr, null, r.a.createElement("span", null, "Deposit"), r.a.createElement("span", {
                            className: "right"
                        }, e.symbol)), r.a.createElement(Jr, null, r.a.createElement("span", null, "Earn"), r.a.createElement("span", {
                            className: "right"
                        }, "MEOW")), r.a.createElement(v, {
                            onClick: y,
                            size: "md",
                            text: "Unlock Wallet"
                        }))
                    })))))
                });

            function si() {
                var e = Object(d.a)(["\n  color:#27c7d5;\n  font-size:20px;\n  width: 50vw;\n  text-align: center;\n  position:  relative;\n  top: -40px;\n"]);
                return si = function () {
                    return e
                }, e
            }

            function li() {
                var e = Object(d.a)(["\n  color:#B9C9BC;\n  font-size:29px;\n  width: 50vw;\n  text-align: center;\n  font-weight: 900;\n  margin: 50px;\n"]);
                return li = function () {
                    return e
                }, e
            }

            function pi() {
                var e = Object(d.a)(["\n  @media (max-width: 500px) {\n    width: 100vw;\n  }\n"]);
                return pi = function () {
                    return e
                }, e
            }

            function di() {
                var e = Object(d.a)(["\n  display: none;\n  @media (max-width: 400px) {\n    display: block;\n    background: #50d7dd;\n    border-radius: 5px;\n    line-height: 40px;\n    font-weight: 900;\n    padding: 0 20px;\n    margin-bottom: 30px;\n    color: #fff;\n  }\n"]);
                return di = function () {
                    return e
                }, e
            }

            function mi() {
                var e = Object(d.a)(["\n  position: relative;\n  font-size: 18px;\n  color: #4bd4dc;\n  FONT-WEIGHT: 600;\n  top: -30px;\n"]);
                return mi = function () {
                    return e
                }, e
            }
            var fi = l.c.div(mi()),
                yi = Object(l.c)(o.c)(di()),
                bi = l.c.img(pi()),
                hi = l.c.div(li()),
                xi = (l.c.div(si()), function () {
                    var e = Object(s.g)().path,
                        n = Object(p.h)().account,
                        i = Q(r.a.createElement(Ee, null)),
                        c = (Object(u.a)(i, 1)[0], function () {
                            var e = Object(a.useState)(0),
                                n = Object(u.a)(e, 2),
                                t = n[0],
                                r = n[1],
                                i = Object(p.h)(),
                                c = i.account,
                                o = i.ethereum,
                                s = _e(),
                                l = Object(a.useCallback)(Object(je.a)(Oe.a.mark((function e() {
                                    var n, t, a, i, c, u;
                                    return Oe.a.wrap((function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Ne(o, "0xe9e7cea3dedca5984780bafc599bd69add087d56", "0x1B96B92314C44b159149f7E0303511fB2Fc4774f");
                                            case 2:
                                                return n = e.sent, e.next = 5, Ne(o, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "0x1B96B92314C44b159149f7E0303511fB2Fc4774f");
                                            case 5:
                                                return t = e.sent, a = Ce(new Te.a(n)) / Ce(new Te.a(t)), e.next = 9, Ne(o, "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6");
                                            case 9:
                                                return i = e.sent, e.next = 12, Ne(o, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6");
                                            case 12:
                                                c = e.sent, u = Ce(new Te.a(c)) / Ce(new Te.a(i)), r(u * a);
                                            case 16:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), [c, o]);
                            return Object(a.useEffect)((function () {
                                c && o && l()
                            }), [c, o, r, s]), t
                        }());
                    return r.a.createElement(s.c, null, r.a.createElement(ma, null, r.a.createElement(r.a.Fragment, null, r.a.createElement(s.a, {
                        exact: !0,
                        path: e
                    }, r.a.createElement(hi, null, "Stake FLIP tokens to stack MEOW"), n && r.a.createElement(fi, null, "MEOW PRICE: $", c.toFixed(3)), r.a.createElement(yi, {
                        exact: !0,
                        activeClassName: "active",
                        to: "/staking"
                    }, "Staking"), r.a.createElement(oi, null), r.a.createElement(bi, {
                        src: t(129)
                    })), r.a.createElement(s.a, {
                        path: "".concat(e, "/:farmId")
                    }, r.a.createElement(wr, null)))))
                }),
                vi = t(80),
                gi = function (e) {
                    var n = e.size,
                        t = void 0 === n ? 36 : n,
                        a = e.v1;
                    e.v2, e.v3;
                    return r.a.createElement("span", {
                        role: "img",
                        style: {
                            fontSize: t,
                            filter: a ? "saturate(0.5)" : void 0
                        }
                    }, "\ud83e\udd5e")
                },
                Ei = function () {
                    var e = Object(a.useState)([]),
                        n = Object(u.a)(e, 2),
                        t = n[0],
                        r = n[1],
                        i = Object(p.h)().account,
                        c = sn(),
                        o = mn(c),
                        s = dn(c),
                        l = _e(),
                        d = Object(a.useCallback)(Object(je.a)(Oe.a.mark((function e() {
                            var n;
                            return Oe.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Promise.all(o.map((function (e) {
                                            var n = e.pid;
                                            return console.log(yn(s, n, i)), yn(s, n, i)
                                        })));
                                    case 2:
                                        n = e.sent, console.log(n), r(n);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [i, s, c]);
                    return Object(a.useEffect)((function () {
                        i && s && c && d()
                    }), [i, l, s, r, c]), console.log(o, t), t
                };

            function wi() {
                var e = Object(d.a)(["\n  color: #12AAB5;\n"]);
                return wi = function () {
                    return e
                }, e
            }

            function Oi() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n\n  line-height: 60px;\n"]);
                return Oi = function () {
                    return e
                }, e
            }

            function ji() {
                var e = Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 1rem;\n"]);
                return ji = function () {
                    return e
                }, e
            }

            function ki() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: stretch;\n  }\n"]);
                return ki = function () {
                    return e
                }, e
            }

            function Ti() {
                var e = Object(d.a)(["\n  font-family: 'Roboto Mono', monospace;\n  float: right;\n  height: 50px;\n  line-height: 50px;\n  color: #B9C9BC;\n"]);
                return Ti = function () {
                    return e
                }, e
            }

            function Ci() {
                var e = Object(d.a)(["\n  font-size: 14px;\n  padding: 0 20px;\n  line-height: 50px;\n  color: #B9C9BC;\n  border-top: solid 1px #7645d938;\n  padding: 0 2rem;\n"]);
                return Ci = function () {
                    return e
                }, e
            }

            function Bi() {
                var e = Object(d.a)(["\n  color: #B9C9BC;\n  @media (max-width: 500px) {\n    line-height: 20px;\n  }\n"]);
                return Bi = function () {
                    return e
                }, e
            }

            function Ai() {
                var e = Object(d.a)(["\n  line-height: 40px;\n  color: #B9C9BC;\n"]);
                return Ai = function () {
                    return e
                }, e
            }

            function Si() {
                var e = Object(d.a)(["\n  width: 100%;\n  box-shadow: 0px 2px 8px rgba(171,133,115,0.21);\n  border-radius: 20px;\n  background: #fff;\n  line-height: 60px;\n  padding: 0 25px;\n  box-sizing: border-box;\n  background: #FFFDFA;\n  margin-top: 20px;\n  display:flex;\n  justify-content: space-between;\n  @media (max-width: 500px) {\n    flex-direction: column;\n    line-height: 40px;\n    padding: 25px;\n    text-align: center;\n  }\n"]);
                return Si = function () {
                    return e
                }, e
            }
            var Mi = function () {
                    var e, n = Object(a.useState)(0),
                        t = Object(u.a)(n, 2),
                        i = t[0],
                        c = t[1],
                        o = Object(a.useState)(0),
                        s = Object(u.a)(o, 2),
                        l = s[0],
                        p = s[1],
                        d = Object(a.useState)(1),
                        m = Object(u.a)(d, 2),
                        f = m[0],
                        y = m[1],
                        b = Ei(),
                        h = 0,
                        x = Object(vi.a)(b);
                    try {
                        for (x.s(); !(e = x.n()).done;) {
                            var v = e.value;
                            h += new Te.a(v).div(new Te.a(10).pow(18)).toNumber()
                        }
                    } catch (O) {
                        x.e(O)
                    } finally {
                        x.f()
                    }
                    var g = jr(),
                        E = Object(u.a)(g, 1)[0],
                        w = kr();
                    if (w && w.length) E.reduce((function (e, n, t) {
                        n.id;
                        return e + (w[t].totalWethValue.toNumber() || 0)
                    }), 0);
                    return Object(a.useEffect)((function () {
                        c(l), p(h)
                    }), [h]), r.a.createElement(Ri, {
                        style: {
                            transform: "scale(".concat(f, ")"),
                            transformOrigin: "right bottom",
                            transition: "transform 0.5s",
                            display: "inline-block"
                        }
                    }, r.a.createElement(Bn.a, {
                        start: i,
                        end: l,
                        decimals: l < 0 ? 4 : l > 1e5 ? 0 : 3,
                        duration: 1,
                        onStart: function () {
                            y(1.25), setTimeout((function () {
                                return y(1)
                            }), 600)
                        },
                        separator: ","
                    }))
                },
                Di = l.c.div(Si()),
                Fi = l.c.div(Ai()),
                Ni = l.c.div(Bi()),
                _i = l.c.div(Ci()),
                Ii = l.c.div(Ti()),
                Pi = l.c.div(ki()),
                zi = l.c.div(ji()),
                Li = l.c.div(Oi()),
                Ri = l.c.span(wi()),
                Ki = function () {
                    var e = Object(a.useState)(),
                        n = Object(u.a)(e, 2),
                        t = n[0],
                        i = n[1],
                        c = sn(),
                        o = Pe(pn(c)),
                        s = function (e) {
                            var n = Object(a.useState)(new Te.a(0)),
                                t = Object(u.a)(n, 2),
                                r = t[0],
                                i = t[1],
                                c = Object(p.h)(),
                                o = c.account,
                                s = c.ethereum,
                                l = _e(),
                                d = Object(a.useCallback)(Object(je.a)(Oe.a.mark((function n() {
                                    var t;
                                    return Oe.a.wrap((function (n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.next = 2, Ne(s, e, "0x000000000000000000000000000000000000dEaD");
                                            case 2:
                                                t = n.sent, i(new Te.a(t));
                                            case 4:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                }))), [o, s, e]);
                            return Object(a.useEffect)((function () {
                                o && s && d()
                            }), [o, s, i, l, e]), r
                        }(pn(c)),
                        l = Object(p.h)(),
                        d = l.account;
                    l.ethereum;
                    return Object(a.useEffect)((function () {
                        function e() {
                            return (e = Object(je.a)(Oe.a.mark((function e() {
                                var n;
                                return Oe.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, xn(c);
                                        case 2:
                                            n = e.sent, i(n);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }
                        c && function () {
                            e.apply(this, arguments)
                        }()
                    }), [c, i]), r.a.createElement(r.a.Fragment, null, r.a.createElement(Pi, null, r.a.createElement(se, null, r.a.createElement(de, null, r.a.createElement(zi, null, r.a.createElement(Fi, null, "Your MEOW Balance"), r.a.createElement(Li, null, r.a.createElement(gi, null), r.a.createElement(F, null), r.a.createElement("div", {
                        style: {
                            flex: 1
                        }
                    }, r.a.createElement(Mn, {
                        value: d ? Ce(o) : "Locked"
                    }))))), r.a.createElement(_i, null, "Pending harvest", r.a.createElement(Ii, null, r.a.createElement(Mi, null), " MEOW"))), r.a.createElement(F, null), r.a.createElement(se, null, r.a.createElement(zi, null, r.a.createElement(de, null, r.a.createElement(Fi, null, "Total MEOW Supply"), r.a.createElement(Li, null, r.a.createElement(Mn, {
                        value: t ? Ce(t) - Ce(s) : "Locked"
                    })))), r.a.createElement(_i, null, "New rewards per block", r.a.createElement(Ii, null, "40 MEOW")))), r.a.createElement(Di, null, r.a.createElement(Ni, null, "\ud83d\udd25 Total MEOW burned since launch"), r.a.createElement(Mn, {
                        value: d ? Ce(s) : "Locked",
                        fontSize: "20px"
                    })))
                };

            function Ui() {
                var e = Object(d.a)(["\n  color: ", ";\n  font-size: 16px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n\n  > b {\n    color: ", ";\n  }\n"]);
                return Ui = function () {
                    return e
                }, e
            }

            function Gi() {
                var e = Object(d.a)(["\n  height: 200px;\n  @media (max-width: 500px) {\n    height: 60px;\n  }\n"]);
                return Gi = function () {
                    return e
                }, e
            }

            function Hi() {
                var e = Object(d.a)(["\n  position: absolute;\n  z-index: -3;\n  top: 10%;\n"]);
                return Hi = function () {
                    return e
                }, e
            }
            var Wi = l.c.img(Hi()),
                Vi = l.c.div(Gi()),
                Xi = (l.c.h3(Ui(), (function (e) {
                    return e.theme.color.grey[500]
                }), (function (e) {
                    return e.theme.color.grey[600]
                })), function () {
                    return r.a.createElement(ma, null, r.a.createElement(Wi, {
                        src: t(521)
                    }), r.a.createElement(Vi, null), r.a.createElement(lt, null, r.a.createElement(Ki, null)), r.a.createElement(F, {
                        size: "lg"
                    }), r.a.createElement("div", {
                        style: {
                            margin: "0 auto"
                        }
                    }, r.a.createElement(v, {
                        text: "\ud83d\udc69\u200d\ud83c\udf73 See the Kitchen",
                        to: "/farms",
                        variant: "secondary"
                    })))
                }),
                Ji = t(129),
                Yi = t.n(Ji);

            function qi() {
                var e = Object(d.a)(["\n  color: ", ";\n  font-size: 18px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n"]);
                return qi = function () {
                    return e
                }, e
            }

            function $i() {
                var e = Object(d.a)(["\n  font-family: 'monospace', sans-serif;\n  line-height: 80px;\n  color: #B9C9BC;\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0;\n  margin-top: 10px;\n  padding: 0;\n  @media (max-width: 850px) {\n    display: none;\n  }\n"]);
                return $i = function () {
                    return e
                }, e
            }

            function Qi() {
                var e = Object(d.a)(["\n  font-size: 180px;\n  height: 180px;\n  line-height: 180px;\n  text-align: center;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]);
                return Qi = function () {
                    return e
                }, e
            }

            function Zi() {
                var e = Object(d.a)(["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: ", "px;\n  padding-top: ", "px;\n"]);
                return Zi = function () {
                    return e
                }, e
            }
            var ec = l.c.div(Zi(), (function (e) {
                    return e.theme.spacing[6]
                }), (function (e) {
                    return e.theme.spacing[6]
                })),
                nc = l.c.div(Qi()),
                tc = l.c.h1($i()),
                ac = l.c.h3(qi(), (function (e) {
                    return e.theme.color.grey[400]
                })),
                rc = function (e) {
                    var n = e.icon,
                        t = e.subtitle,
                        a = e.title;
                    return r.a.createElement(lt, {
                        size: "sm"
                    }, r.a.createElement(ec, null, r.a.createElement(nc, null, n), r.a.createElement(tc, null, a), r.a.createElement(ac, null, t)))
                };

            function ic() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]);
                return ic = function () {
                    return e
                }, e
            }

            function cc() {
                var e = Object(d.a)(["\n  height: ", "px;\n  width: ", "px;\n"]);
                return cc = function () {
                    return e
                }, e
            }

            function uc() {
                var e = Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ", "px;\n  width: 100%;\n"]);
                return uc = function () {
                    return e
                }, e
            }

            function oc() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]);
                return oc = function () {
                    return e
                }, e
            }
            var sc = l.c.div(oc()),
                lc = l.c.div(uc(), (function (e) {
                    return e.theme.spacing[6]
                })),
                pc = (l.c.div(cc(), (function (e) {
                    return e.theme.spacing[4]
                }), (function (e) {
                    return e.theme.spacing[4]
                })), l.c.div(ic())),
                dc = function (e) {
                    var n = e.pid,
                        t = ba(n),
                        i = Object(a.useState)(!1),
                        c = Object(u.a)(i, 2),
                        o = c[0],
                        s = c[1],
                        l = ha(n).onReward;
                    return r.a.createElement(se, null, r.a.createElement(de, null, r.a.createElement(pc, null, r.a.createElement(sc, null, r.a.createElement(w, null, "\ud83e\udd5e"), r.a.createElement(Mn, {
                        value: Ce(t)
                    }), r.a.createElement(Tn, {
                        text: "MEOW Earned"
                    })), r.a.createElement(lc, null, r.a.createElement(v, {
                        disabled: !t.toNumber() || o,
                        text: o ? "Collecting MEOW" : "Harvest",
                        onClick: Object(je.a)(Oe.a.mark((function e() {
                            return Oe.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return s(!0), e.next = 3, l();
                                    case 3:
                                        s(!1);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    })))))
                };

            function mc() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-right: 10px;\n"]);
                return mc = function () {
                    return e
                }, e
            }

            function fc() {
                var e = Object(d.a)(["\n  height: ", "px;\n  width: ", "px;\n"]);
                return fc = function () {
                    return e
                }, e
            }

            function yc() {
                var e = Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ", "px;\n  width: 100%;\n"]);
                return yc = function () {
                    return e
                }, e
            }

            function bc() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]);
                return bc = function () {
                    return e
                }, e
            }
            var hc = l.c.div(bc()),
                xc = l.c.div(yc(), (function (e) {
                    return e.theme.spacing[6]
                })),
                vc = (l.c.div(fc(), (function (e) {
                    return e.theme.spacing[4]
                }), (function (e) {
                    return e.theme.spacing[4]
                })), l.c.div(mc())),
                gc = function () {
                    ba(0);
                    var e = Object(a.useState)(!1),
                        n = Object(u.a)(e, 2),
                        t = (n[0], n[1], sn()),
                        i = Pe(function (e) {
                            return e && e.syrupAddress
                        }(t));
                    return r.a.createElement(se, null, r.a.createElement(de, null, r.a.createElement(vc, null, r.a.createElement(hc, null, r.a.createElement(w, null, "\ud83d\udd38"), r.a.createElement(Mn, {
                        value: Ce(i)
                    }), r.a.createElement(Tn, {
                        text: "SYRUP"
                    })), r.a.createElement(xc, null, r.a.createElement(v, {
                        disabled: !0,
                        text: "To Vote"
                    })))))
                },
                Ec = function (e) {
                    var n = e.max,
                        t = e.onConfirm,
                        i = e.onDismiss,
                        c = e.tokenName,
                        o = void 0 === c ? "" : c,
                        s = Object(a.useState)(""),
                        l = Object(u.a)(s, 2),
                        p = l[0],
                        d = l[1],
                        m = Object(a.useState)(!1),
                        f = Object(u.a)(m, 2),
                        y = f[0],
                        b = f[1],
                        h = Object(a.useMemo)((function () {
                            return Be(n)
                        }), [n]),
                        x = Object(a.useCallback)((function (e) {
                            d(e.currentTarget.value)
                        }), [d]),
                        g = Object(a.useCallback)((function () {
                            d(h)
                        }), [h, d]);
                    return r.a.createElement(S, null, r.a.createElement(H, {
                        text: "Deposit ".concat(o, " Tokens")
                    }), r.a.createElement(Qa, {
                        value: p,
                        onSelectMax: g,
                        onChange: x,
                        max: h,
                        symbol: o
                    }), r.a.createElement(z, null, r.a.createElement(v, {
                        text: "Cancel",
                        variant: "secondary",
                        onClick: i
                    }), r.a.createElement(v, {
                        disabled: y,
                        text: y ? "Pending Confirmation" : "Confirm",
                        onClick: Object(je.a)(Oe.a.mark((function e() {
                            return Oe.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return b(!0), e.next = 3, t(p);
                                    case 3:
                                        b(!1), i();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    })))
                },
                wc = function (e) {
                    var n = e.onConfirm,
                        t = e.onDismiss,
                        i = e.max,
                        c = e.tokenName,
                        o = void 0 === c ? "" : c,
                        s = Object(a.useState)(""),
                        l = Object(u.a)(s, 2),
                        p = l[0],
                        d = l[1],
                        m = Object(a.useState)(!1),
                        f = Object(u.a)(m, 2),
                        y = f[0],
                        b = f[1],
                        h = Object(a.useMemo)((function () {
                            return Be(i)
                        }), [i]),
                        x = Object(a.useCallback)((function (e) {
                            d(e.currentTarget.value)
                        }), [d]),
                        g = Object(a.useCallback)((function () {
                            d(h)
                        }), [h, d]);
                    return r.a.createElement(S, null, r.a.createElement(H, {
                        text: "Withdraw ".concat(o)
                    }), r.a.createElement(Qa, {
                        onSelectMax: g,
                        onChange: x,
                        value: p,
                        max: h,
                        symbol: o
                    }), r.a.createElement(z, null, r.a.createElement(v, {
                        text: "Cancel",
                        variant: "secondary",
                        onClick: t
                    }), r.a.createElement(v, {
                        disabled: y,
                        text: y ? "Pending Confirmation" : "Confirm",
                        onClick: Object(je.a)(Oe.a.mark((function e() {
                            return Oe.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return b(!0), e.next = 3, n(p);
                                    case 3:
                                        b(!1), t();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    })))
                };

            function Oc() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]);
                return Oc = function () {
                    return e
                }, e
            }

            function jc() {
                var e = Object(d.a)(["\n  height: ", "px;\n  width: ", "px;\n"]);
                return jc = function () {
                    return e
                }, e
            }

            function kc() {
                var e = Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ", "px;\n  width: 100%;\n"]);
                return kc = function () {
                    return e
                }, e
            }

            function Tc() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]);
                return Tc = function () {
                    return e
                }, e
            }
            var Cc = l.c.div(Tc()),
                Bc = l.c.div(kc(), (function (e) {
                    return e.theme.spacing[6]
                })),
                Ac = l.c.div(jc(), (function (e) {
                    return e.theme.spacing[4]
                }), (function (e) {
                    return e.theme.spacing[4]
                })),
                Sc = l.c.div(Oc()),
                Mc = function (e) {
                    var n = e.lpContract,
                        t = e.pid,
                        i = e.tokenName,
                        c = Object(a.useState)(!1),
                        o = Object(u.a)(c, 2),
                        s = o[0],
                        l = o[1],
                        d = Object(p.h)().account,
                        m = Da(n),
                        f = Fa(n).onApprove,
                        y = Pe(n.options.address),
                        b = _a(t),
                        h = Na(t).onStake,
                        x = Ia(t).onUnstake,
                        g = Q(r.a.createElement(Ec, {
                            max: y,
                            onConfirm: h,
                            tokenName: i
                        })),
                        E = Object(u.a)(g, 1)[0],
                        O = Q(r.a.createElement(wc, {
                            max: b,
                            onConfirm: x,
                            tokenName: i
                        })),
                        j = Object(u.a)(O, 1)[0],
                        k = Object(a.useCallback)(Object(je.a)(Oe.a.mark((function e() {
                            return Oe.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, l(!0), e.next = 4, f();
                                    case 4:
                                        e.sent || l(!1), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.log(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        }))), [f, l]),
                        T = Q(r.a.createElement(In, null)),
                        C = (Object(u.a)(T, 1)[0], Q(r.a.createElement(Ee, null), "provider")),
                        B = Object(u.a)(C, 1)[0],
                        A = Object(a.useCallback)((function () {
                            B()
                        }), [B]);
                    return r.a.createElement(se, null, r.a.createElement(de, null, r.a.createElement(Sc, null, r.a.createElement(Cc, null, r.a.createElement(w, null, "\u26cf\ud83d\udc30"), r.a.createElement(Mn, {
                        value: Ce(b)
                    }), r.a.createElement(Tn, {
                        text: "".concat(i, " Tokens Staked")
                    })), r.a.createElement(Bc, null, !d && r.a.createElement(v, {
                        onClick: A,
                        size: "md",
                        text: "Unlock Wallet"
                    }), d && (m.toNumber() ? r.a.createElement(r.a.Fragment, null, r.a.createElement(v, {
                        disabled: b.eq(new Te.a(0)),
                        text: "Unstake",
                        onClick: j
                    }), r.a.createElement(Ac, null), r.a.createElement(Sa, {
                        onClick: E
                    }, r.a.createElement(Ma, null))) : r.a.createElement(v, {
                        disabled: s,
                        onClick: k,
                        text: "Approve ".concat(i)
                    }))))))
                };

            function Dc() {
                var e = Object(d.a)(["\n  color: ", ";\n  font-size: 16px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n"]);
                return Dc = function () {
                    return e
                }, e
            }

            function Fc() {
                var e = Object(d.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]);
                return Fc = function () {
                    return e
                }, e
            }

            function Nc() {
                var e = Object(d.a)(["\n  display: flex;\n  width: 800px;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]);
                return Nc = function () {
                    return e
                }, e
            }

            function _c() {
                var e = Object(d.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);
                return _c = function () {
                    return e
                }, e
            }

            function Ic() {
                var e = Object(d.a)(["\n  color:#B9C9BC;\n  font-size:20px;\n  width: 50vw;\n  text-align: center;\n  font-weight: 900;\n  line-height:  2rem;\n"]);
                return Ic = function () {
                    return e
                }, e
            }
            var Pc = l.c.div(Ic()),
                zc = l.c.div(_c()),
                Lc = l.c.div(Nc()),
                Rc = l.c.div(Fc()),
                Kc = l.c.h3(Dc(), (function (e) {
                    return e.theme.color.grey[400]
                })),
                Uc = function () {
                    Object(p.h)().account;
                    var e = fa("MEOW") || {
                            pid: 0,
                            lpToken: "",
                            lpTokenAddress: "",
                            tokenAddress: "",
                            earnToken: "",
                            name: "",
                            icon: "",
                            tokenSymbol: ""
                        },
                        n = e.pid,
                        t = e.lpToken,
                        i = e.lpTokenAddress,
                        c = (e.tokenAddress, e.earnToken);
                    e.name, e.icon, e.tokenSymbol;
                    Object(a.useEffect)((function () {
                        window.scrollTo(0, 0)
                    }), []);
                    var u = sn(),
                        o = Object(p.h)().ethereum,
                        s = Object(a.useMemo)((function () {
                            return De(o, i)
                        }), [o, i]);
                    ya(dn(u)).onRedeem, Object(a.useMemo)((function () {
                        return t.toUpperCase()
                    }), [t]), Object(a.useMemo)((function () {
                        return c.toUpperCase()
                    }), [c]);
                    return r.a.createElement(ma, null, r.a.createElement(r.a.Fragment, null, r.a.createElement(rc, {
                        icon: r.a.createElement("img", {
                            src: Yi.a,
                            height: "90"
                        }),
                        title: "Stake Meow, get SYRUP.",
                        subtitle: "SYRUP holders proportionally split 25% of MEOW block emissions each day (10 MEOW per block), Rewards are distributed each block. SYRUP will also be used to for the KittyExchange Lottery and general governance. "
                    }), r.a.createElement(Pc, null, "1 MEOW = 1 SYRUP"), r.a.createElement(Pc, null, "You can swap back anytime"), r.a.createElement(F, {
                        size: "lg"
                    }), r.a.createElement(zc, null, r.a.createElement(Lc, null, r.a.createElement(Rc, null, r.a.createElement(gc, null)), r.a.createElement(F, null), r.a.createElement(Rc, null, r.a.createElement(dc, {
                        pid: n
                    })), r.a.createElement(F, null), r.a.createElement(Rc, null, r.a.createElement(Mc, {
                        lpContract: s,
                        pid: n,
                        tokenName: t.toUpperCase()
                    }))), r.a.createElement(F, {
                        size: "lg"
                    }), r.a.createElement(Kc, null, "\u2b50\ufe0f Every time you stake and unstake MEOW tokens, the contract will automagically harvest MEOW rewards for you!"), r.a.createElement(F, {
                        size: "lg"
                    }))))
                };

            function Gc() {
                var e = Object(d.a)(["\n  margin-top: 160px;\n  text-align: center;\n  > div{\n    display:  inline-block;\n    text-align: left;\n  }\n"]);
                return Gc = function () {
                    return e
                }, e
            }
            var Hc = l.c.div(Gc()),
                Wc = function () {
                    Object(p.h)().account;
                    var e = Q(r.a.createElement(Ee, null));
                    Object(u.a)(e, 1)[0];
                    Object(a.useEffect)((function () {
                        window.scrollTo(0, 0)
                    }), []);
                    sn(), Object(p.h)().ethereum;
                    return r.a.createElement(Hc, null, r.a.createElement("div", null, "|-----------------|", r.a.createElement("br", null), "| COMING\xa0\xa0\xa0\xa0\xa0|", r.a.createElement("br", null), "| SOON\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|", r.a.createElement("br", null), "|-----------------|", r.a.createElement("br", null), "(\\__/) ||", r.a.createElement("br", null), "(\u2022\u3145\u2022) ||", r.a.createElement("br", null), "/ \u3000 \u3065", r.a.createElement("br", null)))
                };

            function Vc() {
                var e = Object(d.a)(["\n  margin-top: 160px;\n  text-align: center;\n  > div{\n    display:  inline-block;\n    text-align: left;\n  }\n"]);
                return Vc = function () {
                    return e
                }, e
            }
            var Xc = l.c.div(Vc()),
                Jc = function () {
                    Object(p.h)().account;
                    var e = Q(r.a.createElement(Ee, null));
                    Object(u.a)(e, 1)[0];
                    Object(a.useEffect)((function () {
                        window.scrollTo(0, 0)
                    }), []);
                    sn(), Object(p.h)().ethereum;
                    return r.a.createElement(Xc, null, r.a.createElement("div", null, "|-----------------|", r.a.createElement("br", null), "| COMING\xa0\xa0\xa0\xa0\xa0|", r.a.createElement("br", null), "| SOON\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|", r.a.createElement("br", null), "|-----------------|", r.a.createElement("br", null), "(\\__/) ||", r.a.createElement("br", null), "(\u2022\u3145\u2022) ||", r.a.createElement("br", null), "/ \u3000 \u3065", r.a.createElement("br", null)))
                };

            function Yc() {
                var e = Object(d.a)(["\n  text-align: left;\n  width: 60vw;\n  margin: 50px auto;\n  > div{\n    display:  inline-block;\n    text-align: left;\n  }\n"]);
                return Yc = function () {
                    return e
                }, e
            }
            var qc = l.c.div(Yc()),
                $c = function () {
                    var e = Ie("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6"),
                        n = Ie("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6"),
                        t = Ie("0x56b6fb708fc5732dec1afc8d8556423a2edccbd6", "0x981d2Ba1b298888408d342C39c2Ab92e8991691e"),
                        a = Ie("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "0x981d2Ba1b298888408d342C39c2Ab92e8991691e"),
                        i = Ie("0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd", "0xaeBE45E3a03B734c68e5557AE04BFC76917B4686"),
                        c = Ie("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "0xaeBE45E3a03B734c68e5557AE04BFC76917B4686"),
                        u = Ie("0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18", "0xc639187ef82271D8f517de6FEAE4FaF5b517533c"),
                        o = Ie("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "0xc639187ef82271D8f517de6FEAE4FaF5b517533c"),
                        s = Ie("0xae9269f27437f0fcbc232d39ec814844a51d6b8f", "0xd937FB9E6e47F3805981453BFB277a49FFfE04D7"),
                        l = Ie("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "0xd937FB9E6e47F3805981453BFB277a49FFfE04D7"),
                        p = Ie("0x3ee2200efb3400fabb9aacf31297cbdd1d435d47", "0xBA51D1AB95756ca4eaB8737eCD450cd8F05384cF"),
                        d = Ie("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "0xBA51D1AB95756ca4eaB8737eCD450cd8F05384cF"),
                        m = Ie("0x7083609fce4d1d8dc0c979aab8c869ea2c873402", "0xbCD62661A6b1DEd703585d3aF7d7649Ef4dcDB5c"),
                        f = Ie("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "0xbCD62661A6b1DEd703585d3aF7d7649Ef4dcDB5c"),
                        y = Ie("0xe9e7cea3dedca5984780bafc599bd69add087d56", "0x1B96B92314C44b159149f7E0303511fB2Fc4774f"),
                        b = Ie("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "0x1B96B92314C44b159149f7E0303511fB2Fc4774f"),
                        h = Ie("0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5", "0xE2D1B285d83efb935134F644d00FB7c943e84B5B"),
                        x = Ie("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "0xE2D1B285d83efb935134F644d00FB7c943e84B5B"),
                        v = a + c + o + l + d + f + b + x;
                    return r.a.createElement(qc, null, "Estimated total value: $", y / b * v * 2, r.a.createElement("br", null), r.a.createElement("br", null), "MEOW/BNB Pair", r.a.createElement("br", null), "MEOW:", e, r.a.createElement("br", null), "BNB: ", n, r.a.createElement("br", null), r.a.createElement("a", {
                        href: "https://bscscan.com/address/0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
                        target: "_blank"
                    }, "link"), r.a.createElement("br", null), r.a.createElement("br", null), "EOS/BNB Pair", r.a.createElement("br", null), "EOS:", t, r.a.createElement("br", null), "BNB: ", a, r.a.createElement("br", null), r.a.createElement("a", {
                        href: "https://bscscan.com/address/0x981d2Ba1b298888408d342C39c2Ab92e8991691e",
                        target: "_blank"
                    }, "link"), r.a.createElement("br", null), r.a.createElement("br", null), "LINK/BNB Pair", r.a.createElement("br", null), "LINK:", i, r.a.createElement("br", null), "BNB: ", c, r.a.createElement("br", null), r.a.createElement("a", {
                        href: "https://bscscan.com/address/0xaeBE45E3a03B734c68e5557AE04BFC76917B4686",
                        target: "_blank"
                    }, "link"), r.a.createElement("br", null), r.a.createElement("br", null), "BAND/BNB Pair", r.a.createElement("br", null), "BAND:", u, r.a.createElement("br", null), "BNB: ", o, r.a.createElement("br", null), r.a.createElement("a", {
                        href: "https://bscscan.com/address/0xc639187ef82271D8f517de6FEAE4FaF5b517533c",
                        target: "_blank"
                    }, "link"), r.a.createElement("br", null), r.a.createElement("br", null), "BURGER/BNB Pair", r.a.createElement("br", null), "BURGER:", s, r.a.createElement("br", null), "BNB: ", l, r.a.createElement("br", null), r.a.createElement("a", {
                        href: "https://bscscan.com/address/0xd937FB9E6e47F3805981453BFB277a49FFfE04D7",
                        target: "_blank"
                    }, "link"), r.a.createElement("br", null), r.a.createElement("br", null), "ADA/BNB Pair", r.a.createElement("br", null), "ADA:", p, r.a.createElement("br", null), "BNB: ", d, r.a.createElement("br", null), r.a.createElement("a", {
                        href: "https://bscscan.com/address/0xBA51D1AB95756ca4eaB8737eCD450cd8F05384cF",
                        target: "_blank"
                    }, "link"), r.a.createElement("br", null), r.a.createElement("br", null), "DOT/BNB Pair", r.a.createElement("br", null), "DOT:", m, r.a.createElement("br", null), "BNB: ", f, r.a.createElement("br", null), r.a.createElement("a", {
                        href: "https://bscscan.com/address/0xbCD62661A6b1DEd703585d3aF7d7649Ef4dcDB5c",
                        target: "_blank"
                    }, "link"), r.a.createElement("br", null), r.a.createElement("br", null), "BUSD/BNB Pair", r.a.createElement("br", null), "BUSD:", y, r.a.createElement("br", null), "BNB: ", b, r.a.createElement("br", null), r.a.createElement("a", {
                        href: "https://bscscan.com/address/0x1B96B92314C44b159149f7E0303511fB2Fc4774f",
                        target: "_blank"
                    }, "link"), r.a.createElement("br", null), r.a.createElement("br", null), "BAKE/BNB Pair", r.a.createElement("br", null), "BAKE:", h, r.a.createElement("br", null), "BNB: ", x, r.a.createElement("br", null), r.a.createElement("a", {
                        href: "https://bscscan.com/address/0xE2D1B285d83efb935134F644d00FB7c943e84B5B",
                        target: "_blank"
                    }, "link"))
                };

            function Qc(e) {
                var n = e.children,
                    t = Object(p.h)(),
                    i = t.account,
                    c = t.connect;
                return Object(a.useEffect)((function () {
                    window.localStorage.getItem("accountStatus") && (i || (c("injected"), window.localStorage.setItem("accountStatus", "1")))
                }), []), r.a.createElement(r.a.Fragment, null, n)
            }
            var Zc = function (e) {
                    var n = e.children;
                    return r.a.createElement(l.b, {
                        theme: Qt
                    }, r.a.createElement(p.a, {
                        chainId: 56,
                        connectors: {
                            walletconnect: {
                                rpcUrl: "https://bsc-dataseed.binance.org"
                            }
                        }
                    }, r.a.createElement(on, null, r.a.createElement($t, null, r.a.createElement(Ht, null, r.a.createElement($, null, n))))))
                },
                eu = function () {
                    var e = Object(a.useCallback)((function () {
                            localStorage.setItem("disclaimer", "seen")
                        }), []),
                        n = Q(r.a.createElement(W, {
                            onConfirm: e
                        }));
                    Object(u.a)(n, 1)[0];
                    return Object(a.useEffect)((function () {}), []), r.a.createElement("div", null)
                },
                nu = function () {
                    var e = Object(a.useState)(!1),
                        n = Object(u.a)(e, 2),
                        t = n[0],
                        i = n[1],
                        c = Object(a.useCallback)((function () {
                            i(!1)
                        }), [i]),
                        l = Object(a.useCallback)((function () {
                            i(!0)
                        }), [i]);
                    return r.a.createElement(Zc, null, r.a.createElement(o.a, null, r.a.createElement(Ut, {
                        onPresentMobileMenu: l
                    }), r.a.createElement(ut, {
                        onDismiss: c,
                        visible: t
                    }), r.a.createElement(Qc, null, r.a.createElement(s.c, null, r.a.createElement(s.a, {
                        path: "/",
                        exact: !0
                    }, r.a.createElement(Xi, null)), r.a.createElement(s.a, {
                        path: "/farms"
                    }, r.a.createElement(xi, null)), r.a.createElement(s.a, {
                        path: "/staking"
                    }, r.a.createElement(Uc, null)), r.a.createElement(s.a, {
                        path: "/lottery"
                    }, r.a.createElement(Wc, null)), r.a.createElement(s.a, {
                        path: "/voting"
                    }, r.a.createElement(Jc, null)), r.a.createElement(s.a, {
                        path: "/vision"
                    }, r.a.createElement($c, null))))), r.a.createElement(eu, null))
                };
            t(522);
            c.a.render(r.a.createElement(r.a.StrictMode, null, r.a.createElement(nu, null)), document.getElementById("root"))
        }
    },
    [
        [236, 2, 3]
    ]
]);