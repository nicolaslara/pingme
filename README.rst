.. 

pingme
======================

Quickstart
----------

To bootstrap the project::

    virtualenv pingme
    source pingme/bin/activate
    cd path/to/pingme/repository
    pip install -r requirements.pip
    pip install -e .
    cp pingme/settings/local.py.example pingme/settings/local.py
    manage.py syncdb --migrate

Documentation
-------------

Developer documentation is available in Sphinx format in the docs directory.

Initial installation instructions (including how to build the documentation as
HTML) can be found in docs/install.rst.
