
/*1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created

/*let nft will store metadata, there are many entries 
it will be stored in an array*/
let NFTs=[];
//initially the id will be assigned as 1
let _tokenid=1;    
//token_id is declared outdise local scope i.e global scope
function mintNFT(Name,Region,Color)
{
    const metadata=
    {
        "Tokenid":_tokenid,
        "Name":Name,
        "Region":Region,
        "Color":Color
    };
    //putting the metadata into the nft
    NFTs.push(metadata);
    //adding the values of the token
    _tokenid++;
}
function listNFTS()
{
    let i=0;
    while(i<NFTs.length)
    {
        console.log("Uniquetokenid=",NFTs[i].Tokenid);
        console.log("Name=",NFTs[i].Name);
        console.log("Region=",NFTs[i].Region);
        console.log("Color=",NFTs[i].Color);
        console.log("");
        i++;
    }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply()
{
    return NFTs.length;
}
//calling the functions

//function 1 where metadata is stored
mintNFT("Teena","Asia","Rainbow Splash");
mintNFT("Harry","Europe","Skycolor");
mintNFT("Farhat","Africa","crystal Clear");

//function 2 whare we list all the values
console.log("List of NFTs");
listNFTS();

//function 3 to print total no of nfts
console.log("Total no of NFTs=",getTotalSupply());
