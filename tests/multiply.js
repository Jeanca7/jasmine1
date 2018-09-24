describe("calculator2", function(){
    describe("multplication test", function() {
        it("should retun 6", function(){
           expect(multi(2, 3)).toBe(6); 
        });
        
        it("should not return 6 for different numbers", function() {
            expect(multi(5, 5)).toBe(25);
        });
        
    });
});