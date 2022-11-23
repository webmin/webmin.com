---
title: "Third-Party Modules"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
<div id="main">
		




<p>Numerous Webmin modules and themes have been created by independent
developers, to cover functions that do not exist in the core Webmin package
and to provide new user interfaces. You can use the form below to search
for modules matching your needs, or browse
<a href="https://www.webmin.com/cgi-bin/search_third.cgi?modules=1">all modules</a>,
<a href="https://www.webmin.com/cgi-bin/search_third.cgi?themes=1">all themes</a> or <a href="https://www.webmin.com/cgi-bin/search_third.cgi?recent=1">the 20 most recent updates</a>.</p>

<form action="https://www.webmin.com/cgi-bin/search_third.cgi">
<b>Find modules or themes matching:</b>
<input name="search" type="text">
<input class="button" type="submit" value="Search"><br>
<input id="core" name="core" type="checkbox" value="1"> Include core modules in results?
</form>

<form action="https://www.webmin.com/cgi-bin/search_third.cgi">
<b>Show all modules in category:</b>
<select name="category">
<option>Cluster
</option><option>Hardware
</option><option>ISP Control
</option><option>ISP Software
</option><option>Networking
</option><option>Others
</option><option>Servers
</option><option>System
</option><option>Themes
</option><option>Usermin
</option><option>Virtualmin
</option><option>Webmin
</option></select>

<input class="button" type="submit" value="Search"><br>
</form>

<h1>Submitting Your Modules or Theme</h1>

<p>Created your own module or cool theme that you want to share with the
world? Submit it using the form below. The links will be validated, and
your creation added to the modules database shortly:</p>

<form action="https://www.webmin.com/cgi-bin/add_third.cgi" method="post">
<table>
<tr> <td><b>Module name</b></td>
     <td><input name="name" size="40"></td> </tr>
<tr> <td><b>Website URL</b></td>
     <td><input name="websiteurl" size="40"></td> </tr>
<tr> <td><b>Download URL</b></td>
     <td><input name="httpdownloadurl" size="40"></td> </tr>
<tr> <td><b>Description</b></td>
     <td><textarea cols="40" name="description" rows="5"></textarea></td> </tr>
<tr> <td><b>Licence</b></td>
     <td><select name="type">
<option>BSD Licenced
</option><option>Commercial
</option><option>Freeware
</option><option>GPL Licenced
</option></select>
</td> </tr>
<tr> <td><b>Category</b></td>
     <td><select name="category">
<option>Cluster
</option><option>Hardware
</option><option>ISP Control
</option><option>ISP Software
</option><option>Networking
</option><option>Others
</option><option>Servers
</option><option>System
</option><option>Themes
</option><option>Usermin
</option><option>Virtualmin
</option><option>Webmin
</option></select>
</td> </tr>
<tr> <td><b>Version number</b></td>
     <td><input name="version" size="10"></td> </tr>
<tr> <td><b>Author&#39;s name</b></td>
     <td><input name="author" size="40"></td> </tr>

<tr> <td colspan="2">If you have already submitted modules, enter your existing
                   email address and password. If not, an account will be
                   created for you automatically.</td> </tr>

<tr> <td><b>Email address</b></td>
     <td><input name="email" size="40"></td> </tr>
<tr> <td><b>Password</b></td>
     <td><input name="pass" size="20" type="password"></td> </tr>
</table>
<input class="button" type="submit" value="Add Your Module">
</form>

<h1>Managing Your Modules</h1>

<p>If you have already submitted a third-party module to the database and want
to edit its details (perhaps because a new version was released), use the
form below to login with the email address and password you selected when
registering :</p>

<form action="https://www.webmin.com/cgi-bin/list_third.cgi" method="post">
<table>
<tr> <td><b>Email address</b></td>
     <td><input name="email" size="40"></td> </tr>
<tr> <td><b>Password</b></td>
     <td><input name="pass" size="40" type="password"></td> </tr>
</table>
<input class="button" type="submit" value="List Your Modules">
</form>

			</div>
