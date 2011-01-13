import os,sys

# On Ubuntu:
# sudo apt-get install python-profile
# sudo apt-get install python-clearsilver

if __name__ == '__main__':

    gaepath = None    
    if len(sys.argv) > 1:
        gaepath = sys.argv[1]
    else:
        for p in sys.path:
            if 'appengine' in p.lower():
                gaepath = p

    if gaepath:
        if not gaepath in sys.path:
            sys.path.insert(0,gaepath)
        sys.path.append(os.path.join(gaepath,'lib','webob'))

    import libs

    packages = [
        'nose-1.0.0',
        'NoseGAE-0.1.7',
        'WebTest-1.2.2',
        'gaetestbed-0.12'
        ]

    package_path = os.path.join(os.path.dirname(__file__),'libs')
    packages_with_path = map(lambda x:os.path.join(package_path,x),packages)
    map(sys.path.append,packages_with_path)

    import nose
    import nosegae

    nose.main(addplugins=[nosegae.NoseGAE()])
