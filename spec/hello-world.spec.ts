import { HelloWorld } from '../src/hello-world'

describe('HelloWorld', () => {

    it('should say hello world', () => {
        const hello = new HelloWorld()
        expect(hello.echo()).toBe('Hello, World!')
    })

})