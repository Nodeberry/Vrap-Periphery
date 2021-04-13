pragma solidity >=0.5.0;

interface IVrapFactory {
    function getExchange(address) external view returns (address);
}
