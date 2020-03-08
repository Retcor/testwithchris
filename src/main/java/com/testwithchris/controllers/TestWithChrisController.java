package com.testwithchris.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.HashMap;
import java.util.Map;

@Controller
public class TestWithChrisController {

    @RequestMapping(value = "/testWithChris", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> justATest() {
        Map<String, Object> returnObj = new HashMap<>();
        returnObj.put("testText", "This page is coming from Angular!");
        return returnObj;
    }
}
