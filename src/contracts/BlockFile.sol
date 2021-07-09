pragma solidity 0.5.0;

contract BlockFile{
    //code
    string fileHash;

    //write
    function set(string memory _fileHash)public {
        fileHash = _fileHash;


    }
    //read
    function get()public view returns(string memory)
    {
        return fileHash;
    }
    
}