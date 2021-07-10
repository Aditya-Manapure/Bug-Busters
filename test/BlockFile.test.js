const BlockFile = artifacts.require("BlockFile");

require('chai')
    .use(require('chai-as-promised'))
    .should()


contract('BlockFile',(accounts)=>{
    let Blockfile

    describe('deployment',async()=>{
        it('deploys successfully',async()=>{
            Blockfile = await BlockFile.deployed();

        const address = BlockFile.address;
        assert.notEqual(address,'');
        assert.notEqual(address,null);
        assert.notEqual(address,undefined);
        
        console.log(address);
        })

    })
    describe('storage',async()=>{
        it('updates the memeHash',async()=>{
            let memeHash 
            memeHash = 'abc123';
            await Blockfile.set(memeHash);
            const result = await Blockfile.get();
            assert.equal(result,memeHash);
        })
    })
})