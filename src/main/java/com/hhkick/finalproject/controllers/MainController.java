package com.hhkick.finalproject.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/main")
public class MainController {
    @GetMapping("/")
    public String mainPage(){
        return "/mainPage/mainPage";
    }

    @GetMapping("/planner")
    public String planner(){
        return "/planner/planner";
    }

    @GetMapping("/add")
    public String add(){
        return "/addPage/crewAddPage";
    }

    @GetMapping("login")
    public String login(){
        return "/login/login";
    }
}
