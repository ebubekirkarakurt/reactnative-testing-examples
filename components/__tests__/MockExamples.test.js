import doAdd, { forEach } from "../MockExamples";

const mockCallBack = jest.fn((x) => x + 5) 
const doAddCallBack = jest.fn((a,b) => a+b )

describe(' mock examples', ()=>{
    it(' mock function ' , ()=>{
        forEach([0,1,2], mockCallBack);
        
        mockCallBack.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
        //console.log(mockCallBack(), mockCallBack(), mockCallBack(), mockCallBack());

        //console.log(mockCallBack.mock.results[0].value) 
        //console.log(mockCallBack.mock)
        expect(mockCallBack.mock.calls).toHaveLength(3);
    
    })


    it("doAdd with paramaters" , ()=>{
        doAdd(1,2, doAddCallBack);
        console.log(doAddCallBack.mock)
        expect(doAddCallBack).toHaveBeenLastCalledWith(3)
    })

    it("mock with mockImplementationOnce", ()=>{
        const myMock = jest.fn(() => 'default')
                    .mockImplementationOnce(()=> "first call")
                    .mockImplementationOnce(()=> "second call")
        
        console.log(myMock(), myMock(), myMock(), myMock())
        //'first call', 'second call', 'default', 'default'
            
    })

    it(" mockFn.mockImplementationOnce(fn) ", ()=>{
        const myMock = jest.fn()
                    .mockImplementationOnce((cb)=> cb('first call', true))
                    .mockImplementationOnce((cb)=> cb('second call', false))
        
        myMock((err,val) => console.log(err))
        myMock((err,val) => console.log(err))
    })
    
})