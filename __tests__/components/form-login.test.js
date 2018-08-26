/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'

import FormLogin from '../../components/form-login/form-login.js' 

describe('Page login', () => {
    it('titulo do login', () => {
        const form = shallow(<FormLogin />)

        expect(form.find('h1').text()).toEqual('Faça seu login')
    })
})